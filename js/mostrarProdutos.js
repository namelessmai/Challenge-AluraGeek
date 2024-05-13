import { conectaApi } from "./conectaApi.js";

const containerCards = document.querySelector(".cards-container");

function constroiCard(nome, preco, imagem, id) {
    const produto = document.createElement("div");
    produto.className = "card";

    const precoNumber = parseFloat(preco);

    produto.innerHTML = `
    <img class="produto-imagem" src="${imagem}" alt="${nome}">
        <div class="card-container--info">
            <p class="produto-nome">${nome}</p>
        <div class="card-container--value">
            <p class="produto-preco">$ ${precoNumber.toFixed(2)}</p> <!--toFixed(2) formata o número com duas casas decimais-->
            <img class="excluir-produto" src="img/lixeirinha.svg" alt="Ícone de Exclusão" data-id="${id}">
        </div>
        </div>
    `;

    return produto;
}

async function listaProdutos() {
    try {
        const listaApi = await conectaApi.listaProdutos();
        listaApi.forEach(elemento => {
            const card = constroiCard(elemento.nome, elemento.preco, elemento.imagem, elemento.id);
            containerCards.appendChild(card);
            // Adiciona um ouvinte de evento para excluir o card e o produto quando a lixeirinha é clicada
            card.querySelector(".excluir-produto").addEventListener("click", async () => {
                try {
                    // Remove o card da interface
                    containerCards.removeChild(card);
                    // Remove o produto da API
                    await conectaApi.excluirProduto(elemento.id);
                    alert("Produto excluído com sucesso!");
                } catch (error) {
                    console.error("Erro ao excluir produto:", error);
                    alert("Erro ao excluir produto. Verifique o console para mais detalhes.");
                }
            });
        });
    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
    }
}

listaProdutos();
