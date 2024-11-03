const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'produto-api',
  password: 'postgres',
  port: 5432,
});

const carregarScripts = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS produto (
        id SERIAL PRIMARY KEY,
        descricao VARCHAR(200) NOT NULL,
        preco FLOAT NOT NULL,
        estoque INTEGER NOT NULL,
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
        INSERT INTO produto (descricao, preco, estoque) VALUES
        ('Notebook', 2999.99, 20),
        ('Mouse Sem Fio', 79.90, 150),
        ('Teclado Mecânico', 199.90, 100),
        ('Monitor 24"', 899.99, 40),
        ('Fone de Ouvido Bluetooth', 249.90, 70)
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

module.exports = pool;