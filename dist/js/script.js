// Recupera os botões da tela pelo ID
const botaoInvestir = document.querySelector("#btn-investir");
const botaoComprar = document.querySelector("#btn-comprar");

// Recupera o parágrafo onde o resultado será exibido
const resultadoDecisao = document.querySelector("#resultado-decisao");

// Evento para o botão "Desistir e Investir"
botaoInvestir.addEventListener("click", () => {
    resultadoDecisao.textContent =
        "Boa decisão! O valor foi projetado como investimento futuro e pode contribuir para sua liberdade financeira.";

    resultadoDecisao.className =
        "mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-800";
});

// Evento para o botão "Aceitar o Risco e Comprar"
botaoComprar.addEventListener("click", () => {
    resultadoDecisao.textContent =
        "Decisão registrada como risco assumido. O Guardião Financeiro continuará monitorando seus padrões de consumo.";

    resultadoDecisao.className =
        "mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-semibold text-amber-800";
});