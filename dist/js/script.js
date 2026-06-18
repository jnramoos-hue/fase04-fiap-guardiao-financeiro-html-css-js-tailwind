// ======================================================
// Elementos principais da página
// ======================================================

// Seleciona o elemento principal do documento
const pagina = document.documentElement;

// Seleciona o botão de tema
const botaoTema = document.querySelector("#btn-tema");
const iconeTema = document.querySelector("#icone-tema");

// Seleciona o menu do usuário
const botaoUsuario = document.querySelector("#btn-usuario");
const menuUsuario = document.querySelector("#menu-usuario");
const setaUsuario = document.querySelector("#seta-usuario");

// Seleciona os botões da decisão consciente
const botaoInvestir = document.querySelector("#btn-investir");
const botaoComprar = document.querySelector("#btn-comprar");

// Seleciona o resultado da decisão consciente
const resultadoDecisao = document.querySelector("#resultado-decisao");

// Seleciona os elementos da calculadora de juros compostos
const valorInicial = document.querySelector("#valor-inicial");
const taxaAnual = document.querySelector("#taxa-anual");
const tempoAnos = document.querySelector("#tempo-anos");
const botaoCalcular = document.querySelector("#btn-calcular");
const resultadoJuros = document.querySelector("#resultado-juros");

// Seleciona os elementos da alocação compacta
const valorAlocado = document.querySelector("#valor-alocado");
const valorLiquidez = document.querySelector("#valor-liquidez");
const valorRendaFixa = document.querySelector("#valor-renda-fixa");
const valorAtivosReais = document.querySelector("#valor-ativos-reais");
const valorCrescimento = document.querySelector("#valor-crescimento");

// ======================================================
// Funções auxiliares
// ======================================================

// Formata valores em moeda brasileira
function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

// Atualiza o ícone do botão de tema
function atualizarBotaoTema() {
    if (!iconeTema) {
        return;
    }

    if (pagina.classList.contains("dark")) {
        iconeTema.textContent = "☀️";
    } else {
        iconeTema.textContent = "🌙";
    }
}

// Atualiza a alocação compacta com base no valor informado
function atualizarAlocacaoCompacta(valor) {
    if (
        !valorAlocado ||
        !valorLiquidez ||
        !valorRendaFixa ||
        !valorAtivosReais ||
        !valorCrescimento
    ) {
        return;
    }

    valorAlocado.textContent = formatarMoeda(valor);

    valorLiquidez.textContent = formatarMoeda(valor * 0.35);
    valorRendaFixa.textContent = formatarMoeda(valor * 0.30);
    valorAtivosReais.textContent = formatarMoeda(valor * 0.20);
    valorCrescimento.textContent = formatarMoeda(valor * 0.15);
}

// ======================================================
// Tema claro e escuro
// ======================================================

if (botaoTema && iconeTema) {
    botaoTema.addEventListener("click", () => {
        pagina.classList.toggle("dark");
        atualizarBotaoTema();
    });
}

// ======================================================
// Menu do usuário
// ======================================================

if (botaoUsuario && menuUsuario && setaUsuario) {
    botaoUsuario.addEventListener("click", (evento) => {
        evento.stopPropagation();

        menuUsuario.classList.toggle("hidden");
        setaUsuario.classList.toggle("rotate-180");
    });
}

// Fecha o menu do usuário ao clicar fora dele
document.addEventListener("click", (evento) => {
    const clicouNoBotao = botaoUsuario && botaoUsuario.contains(evento.target);
    const clicouNoMenu = menuUsuario && menuUsuario.contains(evento.target);

    if (menuUsuario && !clicouNoBotao && !clicouNoMenu) {
        menuUsuario.classList.add("hidden");

        if (setaUsuario) {
            setaUsuario.classList.remove("rotate-180");
        }
    }
});

// ======================================================
// Decisão consciente
// ======================================================

if (botaoInvestir && resultadoDecisao) {
    botaoInvestir.addEventListener("click", () => {
        resultadoDecisao.textContent =
            "Boa decisão! O valor foi projetado como investimento futuro e pode contribuir para sua liberdade financeira.";

        resultadoDecisao.className =
            "mt-6 rounded-2xl border border-[#d8d3c5] bg-[#f2ead7] p-4 text-sm font-semibold text-[#7d621f] dark:border-[#d6b35a]/30 dark:bg-[#2a2111] dark:text-[#ffe45c]";
    });
}

if (botaoComprar && resultadoDecisao) {
    botaoComprar.addEventListener("click", () => {
        resultadoDecisao.textContent =
            "Decisão registrada como risco assumido. O Guardião Financeiro continuará monitorando seus padrões de consumo.";

        resultadoDecisao.className =
            "mt-6 rounded-2xl border border-red-300 bg-red-50 p-4 text-sm font-semibold text-red-700 dark:border-red-500/30 dark:bg-red-950/40 dark:text-red-200";
    });
}

// ======================================================
// Calculadora de juros compostos
// ======================================================

if (botaoCalcular && valorInicial && taxaAnual && tempoAnos && resultadoJuros) {
    botaoCalcular.addEventListener("click", () => {
        const capital = Number(valorInicial.value);
        const taxa = Number(taxaAnual.value) / 100;
        const tempo = Number(tempoAnos.value);

        // Atualiza os quadrados de alocação com o valor digitado
        atualizarAlocacaoCompacta(capital);

        if (capital <= 0 || taxa <= 0 || tempo <= 0) {
            resultadoJuros.textContent =
                "Preencha todos os campos com valores maiores que zero.";

            resultadoJuros.className =
                "mt-5 rounded-2xl border border-red-300 bg-red-50 p-4 text-sm font-semibold text-red-700 dark:border-red-500/30 dark:bg-red-950/40 dark:text-red-200";

            return;
        }

        const montante = capital * Math.pow(1 + taxa, tempo);
        const rendimento = montante - capital;

        resultadoJuros.innerHTML = `
            <p class="font-semibold">Resultado da projeção:</p>
            <p class="mt-2">Valor investido: <strong>${formatarMoeda(capital)}</strong></p>
            <p>Montante futuro: <strong>${formatarMoeda(montante)}</strong></p>
            <p>Rendimento estimado: <strong>${formatarMoeda(rendimento)}</strong></p>
        `;

        resultadoJuros.className =
            "mt-5 rounded-2xl border border-[#d8d3c5] bg-[#f2ead7] p-4 text-sm text-[#3b321f] dark:border-[#d6b35a]/30 dark:bg-[#2a2111] dark:text-[#ffe45c]";
    });
}

// ======================================================
// Atualização automática ao alterar o valor inicial
// ======================================================

if (valorInicial) {
    valorInicial.addEventListener("input", () => {
        const capital = Number(valorInicial.value);

        if (capital > 0) {
            atualizarAlocacaoCompacta(capital);
        }
    });
}

// ======================================================
// Inicialização da página
// ======================================================

// Define o ícone inicial do tema
atualizarBotaoTema();

// Define a alocação inicial com base no valor do produto analisado
atualizarAlocacaoCompacta(8999);