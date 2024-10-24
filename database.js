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

createTable();

module.exports = pool;