const express = require('express');
const app = express();
app.use(express.json());

const produtoRoutes = require('./src/controller/ProdutoController');
app.use('/', produtoRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});