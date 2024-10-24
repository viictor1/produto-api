const express = require('express');
const pool = require("./db");
const app = express();
app.use(express.json());

const produtoRoutes = require('./src/controller/ProdutoController');
app.use('/', produtoRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});


const carregarScripts = async () => {
    try {
      await pool.query(`
        CREATE TABLE IF NOT EXISTS produto (
          id SERIAL PRIMARY KEY,
          descricao VARCHAR(200) NOT NULL,
          preco FLOAT NOT NULL,
          quantidade INTEGER NOT NULL,
          data DATE DEFAULT CURRENT_DATE
        )
      `);
      console.log('Script de criação rodado com sucesso!');
    } catch (error) {
      console.error('Erro ao criar tabela:', error);
    }
  
    try {
      const result = await pool.query('SELECT COUNT(*) FROM produto');
      const count = parseInt(result.rows[0].count, 10);
  
      if (count === 0) {
        await pool.query(`
          INSERT INTO produto (descricao, preco, quantidade) VALUES
          ('Notebook', 2999.99, 20),
          ('Mouse Sem Fio', 79.90, 150),
          ('Teclado Mecânico', 199.90, 100),
          ('Monitor 24"', 899.99, 40),
          ('Fone de Ouvido Bluetooth', 249.90, 70),
          ('Smartphone', 1999.99, 30),
          ('Tablet', 1599.99, 25),
          ('Impressora Multifuncional', 499.99, 15),
          ('Cadeira Gamer', 899.90, 10),
          ('Webcam Full HD', 159.90, 60)
        `);
        console.log('Seed script rodado com sucesso!');
      } else {
        console.log('Produtos já existem, não foi necessário rodar o seed.');
      }
    } catch (error) {
      console.error('Erro ao rodar o seed script:', error);
    }
  };
  
  carregarScripts().catch((error) => {
    console.error('Erro ao carregar scripts:', error);
  });