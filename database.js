require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

const createTable = async () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS produto (
          id SERIAL PRIMARY KEY,
          descricao VARCHAR(200) NOT NULL,
          preco FLOAT NOT NULL,
          quantidade INTEGER NOT NULL,
          data DATETIME DEFAULT CURRENT_DATETIME
      );
    `;
  
    try {
      await pool.query(createTableQuery);
      console.log("Tabela 'produtos' criada com sucesso.");
    } catch (error) {
      console.error("Erro criando tabela:", error);
    } finally {
      await pool.end();
    }
  };

const seedData = async () => {
    const insertQuery = `
      INSERT INTO produto (descricao, preco, quantidade) VALUES
      ('Cadeira', 1.99, 100),
      ('Pedra', 5.99, 50),
      ('Agua', 4.99, 30),
      ('Leite', 1.99, 130),
      ('Air Fryer', 10.99, 25)
      ON CONFLICT (descricao) DO NOTHING; -- Prevents duplicate entries
    `;
  
    try {
      await pool.query(insertQuery);
      console.log("Dados inseridos com sucesso na tabela 'produto'.");
    } catch (error) {
      console.error("Erro inserindo dados:", error);
    }
}

createTable();
seedData();

module.exports = pool;