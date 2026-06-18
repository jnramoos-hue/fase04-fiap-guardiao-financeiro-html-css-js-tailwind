# Guardião Financeiro — Nudge Cognitivo | FIAP Fase 04

Tela responsiva desenvolvida para a atividade avaliativa da **Fase 04 da FIAP**, utilizando **HTML5, CSS3, Tailwind CSS e JavaScript**.

O projeto faz parte da proposta **Guardião Financeiro**, uma Fintech acadêmica voltada para educação financeira, prevenção de compras impulsivas e apoio à tomada de decisões financeiras conscientes.

---

## Dados acadêmicos

- **Aluno:** Jose da Silva Ramos Junior
- **RM:** 570615
- **Curso:** Análise e Desenvolvimento de Sistemas (On-line)
- **Instituição:** FIAP
- **Fase:** 04
- **Tema anual:** Fintech
- **Projeto:** Guardião Financeiro

> Observação: dados sensíveis como CPF, telefone e e-mail pessoal não são utilizados neste README.

---

## Link do repositório

```text
https://github.com/jnramoos-hue/fase04-fiap-guardiao-financeiro-html-css-js-tailwind
```

---

## Sobre o projeto

O **Guardião Financeiro** é uma proposta de Fintech criada para ajudar usuários a tomarem decisões financeiras mais conscientes no momento da compra.

A ideia central do projeto é transformar uma decisão emocional de consumo em uma escolha orientada por dados. Em vez de apenas registrar gastos depois que eles acontecem, o sistema propõe uma intervenção no momento da decisão por meio de um **Nudge Cognitivo**.

Nesta entrega da Fase 04, foi desenvolvida uma tela única baseada no conceito do projeto: a tela de **Nudge Cognitivo**, responsável por alertar o usuário sobre uma possível compra impulsiva e apresentar o impacto financeiro futuro dessa decisão.

---

## Objetivo da atividade

A atividade avaliativa solicitou a criação de **uma tela relacionada ao projeto Fintech**, utilizando conhecimentos de:

- HTML;
- CSS;
- Tailwind CSS;
- responsividade;
- organização de arquivos;
- Git e GitHub.

O projeto também utiliza JavaScript de forma simples para reforçar a interação da interface, sem uso de APIs externas, frameworks JavaScript ou backend.

---

## Tela desenvolvida

### Guardião Financeiro — Nudge Cognitivo

A tela simula uma área logada do usuário e representa o momento em que uma possível compra impulsiva é identificada.

A interface apresenta:

- cabeçalho com identidade do Guardião Financeiro;
- menu principal da aplicação;
- área do usuário logado com dropdown;
- botão de alternância entre tema claro e escuro;
- resumo financeiro lateral;
- score de impulso;
- checklist do Guardião;
- alerta de compra impulsiva;
- produto identificado;
- valor da compra;
- projeção de custo de oportunidade;
- comparação entre comprar agora e investir;
- calculadora de juros compostos;
- alocação compacta do valor evitado;
- botões de decisão consciente.

---

## Funcionalidades implementadas

### Nudge Cognitivo

A tela exibe um alerta indicando que uma compra pode ser impulsiva. O objetivo é interromper o impulso e incentivar uma decisão mais consciente.

### Score de Impulso

Indicador visual que simula o nível de risco comportamental da compra.

### Checklist do Guardião

Lista os motivos do alerta, como:

- compra classificada como não essencial;
- valor acima do padrão recente de gastos;
- categoria com histórico de impulsividade;
- impacto relevante no patrimônio futuro.

### Calculadora de Juros Compostos

Permite simular quanto uma compra evitada poderia se tornar no futuro, com base em:

- valor inicial;
- taxa anual estimada;
- tempo em anos.

### Alocação compacta do valor evitado

A tela sugere, de forma educacional, possíveis destinos para o valor que deixou de ser gasto:

- reserva e liquidez;
- renda fixa;
- fundos e ativos reais;
- crescimento e proteção.

> A alocação apresentada é apenas uma simulação educacional e não representa recomendação individual de investimento.

### Tema claro e escuro

O usuário pode alternar entre tema claro premium e tema escuro por meio de um botão discreto com ícone de lua/sol.

### Menu do usuário

O cabeçalho apresenta uma área de usuário logado com dropdown contendo opções como:

- Profile;
- Open Finance;
- Ajustes;
- Segurança;
- Sair.

### Decisão consciente

A seção final permite simular a escolha entre:

- desistir da compra e investir o valor;
- aceitar o risco e comprar.

---

## Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **Tailwind CSS**
- **JavaScript**
- **Node.js**
- **npm**
- **Git**
- **GitHub**
- **WebStorm**

---

## Conceitos de JavaScript aplicados

O JavaScript foi utilizado de forma simples e compatível com o conteúdo da Fase 04, aplicando:

- `querySelector()`;
- `addEventListener()`;
- `textContent`;
- `className`;
- `Number()`;
- `Math.pow()`;
- funções;
- condicionais `if`;
- manipulação do DOM;
- eventos de clique;
- atualização dinâmica de valores na página.

---

## Estrutura do projeto

```text
fase04-fiap-guardiao-financeiro-html-css-js-tailwind/
├── dist/
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── script.js
│
├── src/
│   └── input.css
│
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

---

## Configuração do Tailwind CSS

O Tailwind CSS foi configurado com **Tailwind CLI**.

### Instalação das dependências

```bash
npm install tailwindcss @tailwindcss/cli
```

### Arquivo de entrada

```text
src/input.css
```

Conteúdo utilizado:

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));
```

### Script de build

No `package.json`:

```json
"scripts": {
  "build": "npx @tailwindcss/cli -i ./src/input.css -o ./dist/css/styles.css --watch"
}
```

### Executar o Tailwind

```bash
npm run build
```

O arquivo final gerado pelo Tailwind fica em:

```text
dist/css/styles.css
```

---

## Como executar o projeto

Para visualizar a tela, abra o arquivo:

```text
dist/index.html
```

O projeto foi organizado para abrir diretamente pelo arquivo HTML, sem necessidade de servidor, backend ou APIs externas.

Caso deseje recompilar o CSS:

```bash
npm install
npm run build
```

---

## Responsividade

A interface utiliza classes responsivas do Tailwind CSS para adaptação em diferentes tamanhos de tela.

Foram utilizados recursos como:

- `grid-cols-1`;
- `md:grid-cols-2`;
- `lg:grid-cols-[280px_1fr]`;
- `xl:flex-row`;
- `flex-wrap`;
- espaçamentos e cards adaptáveis.

---

## Identidade visual

A identidade visual utiliza uma paleta premium com:

- branco e off-white no tema claro;
- grafite e preto no tema escuro;
- dourado discreto como cor de destaque;
- cards arredondados;
- sombras suaves;
- tipografia moderna com Inter.

O objetivo visual é transmitir segurança, organização e sofisticação, mantendo conexão com o universo de Fintechs e aplicações financeiras.

---

## Critérios da atividade atendidos

- [x] Tela relacionada ao projeto Fintech
- [x] Apenas uma tela principal
- [x] Uso de HTML
- [x] CSS separado em arquivo próprio
- [x] Uso de Tailwind CSS
- [x] Responsividade para dispositivos móveis
- [x] JavaScript simples e compatível com a Fase 04
- [x] Projeto organizado em pastas
- [x] Página abrindo diretamente pelo arquivo HTML
- [x] Repositório público no GitHub
- [x] Arquivos necessários incluídos no projeto
- [x] `node_modules/` ignorado no Git

---

## Observações importantes

- O projeto não possui integração real com Open Finance.
- O projeto não possui login funcional real.
- O projeto não utiliza backend ou banco de dados nesta entrega.
- A calculadora e a alocação são simulações educacionais.
- A alocação exibida não representa recomendação individual de investimento.
- A proposta desta fase é demonstrar uma tela Front-end responsiva utilizando HTML, Tailwind CSS e JavaScript básico.

---

## Autor

**Jose da Silva Ramos Junior**  
RM 570615  
Análise e Desenvolvimento de Sistemas — FIAP  
Fase 04 — Front-end, Tailwind CSS, JavaScript e GitHub

---

## Status

Projeto finalizado para entrega acadêmica da Fase 04.
