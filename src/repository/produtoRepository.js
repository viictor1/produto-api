const pool = require("../../db");

const getAllProdutos = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM produto");
        return result.rows;
    } catch (error) {
        return { error: error.message };
    }
  };

module.exports = {
    getAllProdutos
};