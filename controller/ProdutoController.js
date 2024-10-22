const produtoService = require("../service/produtoService");
const express = require('express');
const router = express.Router();

router.get('/', produtoService.getAllProdutos);

module.exports = router;