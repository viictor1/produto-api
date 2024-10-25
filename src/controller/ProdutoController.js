const produtoService = require("../service/produtoService");
const express = require('express');
const router = express.Router();

router.get('/', produtoService.getAllProdutos);
router.get('/:id', produtoService.getProdutoById);
router.post('/', produtoService.createProduto);
router.put('/', produtoService.updateProduto);
router.delete('/:id', produtoService.deleteProduto);

module.exports = router;