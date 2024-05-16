async function listaProdutos() {
    const conexao = await fetch("https://6644fe03b8925626f890b16d.mockapi.io/alurageek/api/v1/produtos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function addProduto(nome, preco, imagem) {
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
}

async function excluirProduto(id) {
    const response = await fetch(`https://6644fe03b8925626f890b16d.mockapi.io/alurageek/api/v1/produtos/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("Erro ao excluir produto");
    }
}

export const conectaApi = {
    listaProdutos,
    addProduto,
    excluirProduto
}
