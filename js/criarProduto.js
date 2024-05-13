import { conectaApi } from "./conectaApi.js";

conectaApi.listaProdutos();

const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const preco = document.querySelector("[data-preco]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    try {
        await conectaApi.addProduto(nome, preco, imagem);
        alert('Produto cadastrado com sucesso!');
    } catch (e) {
        alert(e);
    }
}

formulario.addEventListener("submit", evento => criarProduto(evento));

// Função para limpar os campos do formulário
function limparCampos() {
    document.querySelector("[data-nome]").value = "";
    document.querySelector("[data-preco]").value = "";
    document.querySelector("[data-imagem]").value = "";
}


document.querySelector(".limpar").addEventListener("click", limparCampos);
