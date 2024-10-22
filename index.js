const express = require('express');
const app = express();

const produtoRoutes = require('./controller/ProdutoController');
app.use('/', produtoRoutes);

const port = process.env.PORT || 3500;
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});