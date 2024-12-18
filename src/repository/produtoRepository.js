const pool = require("../../db");

const getAllProdutos = async () => {
    try {
        const result = await pool.query("SELECT * FROM produto ORDER BY id");
        return result.rows;
    } catch (error) {
        return { error: error.message };
    }
};

const getProdutoById = async (id) => {
    try {
        const result = await pool.query("SELECT * FROM produto WHERE id = $1", [id]);
        return result.rows[0];
    } catch (error) {
        return { error: error.message };
    }
};

const createProduto = async (produto) => {
    try {
        const result = await pool.query(`
            INSERT INTO PRODUTO (DESCRICAO, PRECO, ESTOQUE, DATA) VALUES ($1, $2, $3, $4) RETURNING *
        `, [produto.descricao, produto.preco, produto.estoque, produto.data]);
        return result.rows[0];
    } catch (error) {
        return { error: error.message };
    }
};

const updateProduto = async (produto) => {
    console.log(produto)
    try {
        const result = await pool.query(`
            UPDATE PRODUTO 
            SET DESCRICAO = $1, PRECO = $2, ESTOQUE = $3, DATA = $4
            WHERE ID = $5
            RETURNING *
        `, [produto.descricao, produto.preco, produto.estoque, produto.data, produto.id]);
        return result.rows[0];
    } catch (error) {
        return { error: error.message };
    }
};

const deleteProduto = async (id) => {
    try {
        const result = await pool.query(`
            DELETE FROM produto WHERE ID = $1
        `, [id]);
        return result.rows;
    } catch (error) {
        return { error: error.message };
    }
};


module.exports = {
    getAllProdutos,
    getProdutoById,
    createProduto,
    updateProduto,
    deleteProduto
};