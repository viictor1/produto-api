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

const createProduto = async (req, res) =>{
    const produto = req.body;

    const response = await produtoRepository.createProduto(produto);
    if(response.error){
        return res.status(500).json({ error: response.error});
    }
    return res.status(200).json(response);
}

const updateProduto = async (req, res) =>{
    const produto = req.body;

    const response = await produtoRepository.updateProduto(produto);
    if(response.error){
        return res.status(500).json({ error: response.error});
    }
    return res.status(200).json(response);
}

const deleteProduto = async (req, res) =>{
    const { id } = req.params

    const response = await produtoRepository.deleteProduto(id);
    if(response.error){
        return res.status(500).json({ error: response.error});
    }
    return res.status(200).json(response);
}

module.exports = {
    getAllProdutos,
    getProdutoById,
    createProduto,
    updateProduto,
    deleteProduto
};