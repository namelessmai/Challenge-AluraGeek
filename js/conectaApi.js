async function listaProdutos () {
    const conexao = await fetch ("http://localhost:3000/produtos");
    const conexaoConvertida =  await conexao.json();

    return conexaoConvertida
}

async function addProduto(nome, preco, imagem) {
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem
        })
    });

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function excluirProduto(id) {
    const response = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE"
    });
    if (!response.ok) {
        throw new Error("Erro ao excluir produto");
    }
    return await response.json();
}

export const conectaApi = {
    listaProdutos,
    addProduto,
    excluirProduto
}