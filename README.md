# Guardião Financeiro — Nudge Cognitivo | FIAP Fase 04

Tela responsiva desenvolvida para a atividade avaliativa da **Fase 04 da FIAP**, utilizando **HTML, CSS e Tailwind CSS**.

O projeto faz parte da proposta **Guardião Financeiro**, uma Fintech acadêmica voltada para educação financeira, prevenção de compras impulsivas e apoio à tomada de decisão consciente.

---

## 📌 Sobre o projeto

O **Guardião Financeiro** é uma solução Fintech criada para ajudar pessoas a tomarem decisões financeiras mais conscientes no momento da compra.

A ideia central do projeto é transformar um comportamento impulsivo em uma decisão orientada por dados. Em vez de apenas registrar gastos depois que eles acontecem, o sistema propõe uma intervenção no momento do checkout por meio de um **Nudge Cognitivo**.

Nesta entrega da Fase 04, foi desenvolvida uma tela única baseada no protótipo criado anteriormente no Figma: a tela de **Nudge Cognitivo**, responsável por alertar o usuário sobre uma possível compra impulsiva e apresentar o impacto financeiro futuro dessa decisão.

---

## 🎯 Objetivo da tela

A tela desenvolvida simula o momento em que o sistema identifica uma compra potencialmente impulsiva e apresenta ao usuário:

- o produto identificado;
- o valor da compra;
- a classificação da compra como impulsiva;
- uma projeção de custo de oportunidade;
- uma comparação entre comprar agora ou investir o valor;
- o impacto no balanço patrimonial preditivo;
- duas opções de decisão: desistir da compra ou aceitar o risco.

Essa tela representa o diferencial central do Guardião Financeiro: **interromper o impulso de consumo e transformar a decisão em uma escolha consciente**.

---

## 🧠 Contexto acadêmico

Esta atividade faz parte da **Fase 04 — Front-end, Web, GitHub e Tailwind CSS** do curso de **Análise e Desenvolvimento de Sistemas da FIAP**.

A proposta da atividade é recriar uma tela do projeto Fintech utilizando:

- HTML;
- CSS separado em arquivo próprio;
- Tailwind CSS;
- responsividade mobile;
- publicação em repositório público no GitHub.

---

## 🖥️ Tela desenvolvida

### Tela: Nudge Cognitivo

A tela escolhida foi a de **Nudge Cognitivo**, pois ela representa o coração do MVP do Guardião Financeiro.

No protótipo original, essa tela apresenta uma compra detectada, uma projeção de custo de oportunidade e botões de decisão como:

- **Desistir e Investir este Valor**;
- **Aceitar o Risco e Comprar**.

Essa escolha está alinhada com a proposta do produto, que busca interceptar compras impulsivas no momento da decisão e demonstrar o impacto financeiro futuro da escolha.

---

## 🛠️ Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **Tailwind CSS**
- **Node.js**
- **npm**
- **Git**
- **GitHub**
- **WebStorm**

> Observação: JavaScript não foi utilizado nesta entrega, pois a atividade não exige comportamento dinâmico. A proposta foi priorizar uma interface estática, responsiva e bem estruturada com HTML, CSS e Tailwind CSS.

---

## 📁 Estrutura do projeto

```text
fase04-fiap-guardiao-financeiro-html-css-tailwind/
├── index.html
├── css/
│   └── styles.css
├── src/
│   └── input.css
├── img/
│   └── README_IMAGENS.txt
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## ⚙️ Configuração do Tailwind CSS

O Tailwind CSS foi configurado utilizando a abordagem **Tailwind CLI**.

### Instalação das dependências

```bash
npm install tailwindcss @tailwindcss/cli
```

### Arquivo de entrada

O arquivo de entrada do Tailwind está localizado em:

```text
src/input.css
```

Conteúdo do arquivo:

```css
@import "tailwindcss";
```

### Script de build

No arquivo `package.json`, foi configurado o seguinte script:

```json
"scripts": {
  "build": "npx @tailwindcss/cli -i ./src/input.css -o ./css/styles.css --watch"
}
```

### Executar o Tailwind

```bash
npm run build
```

Esse comando gera o arquivo final de CSS em:

```text
css/styles.css
```

---

## 🚀 Como executar o projeto

Para visualizar a tela, basta abrir o arquivo:

```text
index.html
```

O projeto foi organizado para que o professor consiga abrir a interface diretamente pelo arquivo HTML, sem necessidade de servidor ou configuração extra.

Caso queira recompilar o CSS do Tailwind, execute:

```bash
npm install
npm run build
```

---

## 📱 Responsividade

A interface foi construída com foco em responsividade utilizando classes do Tailwind CSS.

O layout se adapta para diferentes tamanhos de tela:

- em telas maiores, a interface utiliza organização em colunas;
- em telas menores, os blocos são empilhados para melhorar a leitura;
- os cards, botões e seções foram estruturados para manter boa usabilidade em dispositivos móveis.

---

## 🎨 Identidade visual

A identidade visual do projeto utiliza uma combinação de cores associadas a segurança, tecnologia e finanças:

- tons de azul escuro para confiança e proteção;
- tons de verde para crescimento financeiro e investimento;
- tons de amarelo/âmbar para alerta e tomada de decisão;
- fundo claro para melhor legibilidade.

A proposta visual busca reforçar a ideia de um assistente financeiro confiável, moderno e orientado a decisões conscientes.

---

## 🧩 Relação com o MVP

A tela desenvolvida representa parte do fluxo principal do MVP do Guardião Financeiro:

1. O sistema identifica uma possível compra impulsiva.
2. O usuário recebe um alerta no momento da decisão.
3. A interface apresenta o custo de oportunidade da compra.
4. O usuário escolhe entre desistir e investir ou aceitar o risco da compra.
5. A decisão pode futuramente alimentar o histórico financeiro e o balanço preditivo.

Esse fluxo está relacionado às histórias de usuário do projeto, especialmente:

- **Gatilho e Nudge Cognitivo**;
- **Custo de Oportunidade**;
- **Decisão Consciente**;
- **Balanço Preditivo**.

---

## ✅ Critérios atendidos da atividade

- [x] Tela relacionada ao projeto Fintech
- [x] Uso de HTML
- [x] Uso de CSS em arquivo separado
- [x] Uso de Tailwind CSS
- [x] Layout responsivo
- [x] Projeto organizado em pastas
- [x] Arquivo HTML abrindo diretamente no navegador
- [x] Repositório público no GitHub
- [x] Arquivos necessários incluídos no projeto

---

## 📚 Aprendizados aplicados

Durante o desenvolvimento desta entrega, foram aplicados conceitos de:

- estruturação semântica com HTML;
- estilização com classes utilitárias do Tailwind CSS;
- organização de layout com Flexbox e Grid;
- responsividade mobile-first;
- separação entre arquivo HTML e arquivo CSS gerado;
- configuração de ambiente com Node.js e npm;
- versionamento com Git e GitHub;
- transformação de um protótipo de Figma em interface web.

---

## 👨‍💻 Autor

**Jose da Silva Ramos Junior**  
Estudante de Análise e Desenvolvimento de Sistemas — FIAP  
Projeto acadêmico desenvolvido para a Fase 04, com foco em Front-end, Tailwind CSS e publicação no GitHub.

---

## 📌 Observação final

Este projeto é uma entrega acadêmica e representa uma etapa da evolução do Guardião Financeiro como proposta de Fintech/Startup. A tela criada nesta fase é estática, mas foi pensada para futuramente evoluir para uma aplicação com integração de dados, banco de dados, backend, inteligência preditiva e recursos de Open Finance.
