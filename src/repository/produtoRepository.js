const { getPrisma } = require("../infra/prismaClient");

const prisma = getPrisma();

const getAllProdutos = async () => {
    return await prisma.produto.findMany();
}


module.exports = {
    getAllProdutos
};