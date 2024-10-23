const produtoRepository = require('../repository/produtoRepository');

const getAllProdutos = async (req, res) =>{
    const produtos = await produtoRepository.getAllProdutos();
    res.status(200).json(produtos);
}


module.exports = {
    getAllProdutos
};