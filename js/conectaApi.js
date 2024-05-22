let localProducts = [];  // Lista local de produtos

async function listaProdutos() {
    // Carrega produtos da API
    const conexao = await fetch("https://6644fe03b8925626f890b16d.mockapi.io/alurageek/api/v1/produtos");
    const conexaoConvertida = await conexao.json();

    // Combina produtos da API com produtos locais
    return [...conexaoConvertida, ...localProducts];
}

function addProduto(nome, preco, imagem) {
    const newProduct = {
        id: Date.now().toString(),
        name: nome,
        preco: preco,
        imagem: imagem
    };

    // Adiciona o produto
    localProducts.push(newProduct);

    return newProduct;
}

function excluirProduto(id) {
    // Remove o produto
    localProducts = localProducts.filter(product => product.id !== id);

}

export const conectaApi = {
    listaProdutos,
    addProduto,
    excluirProduto
};
