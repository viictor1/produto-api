const produtoRepository = require('../repository/produtoRepository');

const getAllProdutos = async (req, res) =>{
    const response = await produtoRepository.getAllProdutos();
    if(response.error){
        return res.status(500).json({ error: response.error});
    }
    return res.status(200).json(response);
}

const getProdutoById = async (req, res) =>{
    const { id } = req.params

    const response = await produtoRepository.getProdutoById(id);
    if(response.error){
        return res.status(500).json({ error: response.error});
    }
    return res.status(200).json(response);
}

module.exports = {
    getAllProdutos,
    getProdutoById
};