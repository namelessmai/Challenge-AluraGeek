async function listaProdutos() {
    const conexao = await fetch("https://6644fe03b8925626f890b16d.mockapi.io/alurageek/api/v1/produtos");
    const conexaoConvertida = await conexao.json();

    const localProducts = JSON.parse(sessionStorage.getItem('localProducts')) || [];
    return [...conexaoConvertida, ...localProducts];
}

async function addProduto(nome, preco, imagem) {
    const newProduct = {
        id: Date.now().toString(),
        name: nome,
        preco: preco,
        imagem: imagem
    };

    // Adiciona o produto localmente
    const localProducts = JSON.parse(sessionStorage.getItem('localProducts')) || [];
    localProducts.push(newProduct);
    sessionStorage.setItem('localProducts', JSON.stringify(localProducts));

    // Alterado: Fazer a requisição POST para a API
    /*
    const conexao = await fetch("https://6644fe03b8925626f890b16d.mockapi.io/alurageek/api/v1/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            name: nome,
            preco: preco,
            imagem: imagem
        })
    });

    if (!conexao.ok) {
        throw new Error("Não foi possível cadastrar o produto");
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
    */

    return newProduct;
}

async function excluirProduto(id) {
    // Remove o produto localmente
    let localProducts = JSON.parse(sessionStorage.getItem('localProducts')) || [];
    localProducts = localProducts.filter(product => product.id !== id);
    sessionStorage.setItem('localProducts', JSON.stringify(localProducts));

    // Alterado: Fazer a requisição Delete para a API
    /*
    const response = await fetch(`https://6644fe03b8925626f890b16d.mockapi.io/alurageek/api/v1/produtos/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("Erro ao excluir produto");
    }
    */
}

export const conectaApi = {
    listaProdutos,
    addProduto,
    excluirProduto
};
