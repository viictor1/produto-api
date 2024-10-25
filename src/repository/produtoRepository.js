const pool = require("../../db");

const getAllProdutos = async () => {
    try {
        const result = await pool.query("SELECT * FROM produto");
        return result.rows;
    } catch (error) {
        return { error: error.message };
    }
};

const getProdutoById = async (id) => {
    try {
        const result = await pool.query("SELECT * FROM produto WHERE id = $1", [id]);
        return result.rows;
    } catch (error) {
        return { error: error.message };
    }
};

module.exports = {
    getAllProdutos,
    getProdutoById
};