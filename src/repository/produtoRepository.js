const pool = require("../../db");

const getAllProdutos = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM products");
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  };

module.exports = {
    getAllProdutos
};