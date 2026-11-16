[English](README.md) | **Português**

# 🎤 Aplicativo de Contratação de Artistas

**Aplicação React de página única para contratar artistas musicais: busque artistas pela API do Spotify, escolha um, preencha um formulário de contrato validado e gerencie os contratos enviados.**

Projeto front-end construído com React 19 e Vite, com foco em design de componentes, validação de formulários, integração com API externa e um fluxo claro em várias etapas.

---

## 🎯 Objetivo

Quem organiza eventos e quer contratar um artista costuma usar vários canais para encontrar o artista, reunir os dados da contratação e acompanhar os pedidos. Este app concentra esse fluxo em quatro telas:

```text
Buscar artista  →  Formulário de contrato  →  Confirmação  →  Lista de contratos
```

Do ponto de vista técnico, o objetivo foi praticar:

- integração com uma **API real de terceiros**, com autenticação no estilo OAuth;
- criação de **componentes reutilizáveis** (campos, botões, mensagens);
- **estado e validação de formulários** em React;
- navegação e estado compartilhado **sem bibliotecas extras**.

---

## ✨ Funcionalidades

- **Busca de artistas** por nome pela API do Spotify (até 12 resultados, exibidos em uma lista com animação escalonada).
- **Artistas sugeridos ao abrir o app**, para que a tela nunca fique vazia.
- **Formulário de contrato** com nome do cliente, data do evento, cachê e endereço; o nome do artista escolhido é preenchido automaticamente.
- **Validação** dos campos obrigatórios, com mensagens de erro ao lado do campo.
- **Troca de artista** no meio do formulário, caso o escolhido esteja errado.
- **Tela de confirmação** com opções para iniciar um novo contrato ou ver todos os contratos.
- **Lista de contratos** em tabela, com **exclusão**.
- **Persistência** no `localStorage` do navegador.
- **Estados de carregamento e de erro** nas chamadas à API e nas buscas sem resultado.
- **Transições entre telas** com animação de fade-in.

---

## 🧠 Como funciona

### Integração com o Spotify (`src/services/spotify.js`)

- Autentica com o fluxo **Client Credentials**: o client ID e o secret são trocados por um token de acesso em `accounts.spotify.com/api/token`.
- O token fica em **cache na memória**, então é solicitado só uma vez por sessão.
- As buscas chamam `GET /v1/search?type=artist&limit=12`.
- O Spotify não tem um endpoint de "artistas em alta", então as sugestões iniciais vêm de uma busca genérica com uma palavra popular. Essa decisão de UX está documentada no código.

### Navegação e estado (`src/App.jsx`)

- Um único estado `screen` (`search`, `form`, `success`, `list`) define qual página é exibida. Foi uma escolha deliberada para manter o app pequeno e sem dependências, em vez de adicionar um roteador.
- O artista selecionado fica no `App` e é repassado para a página de contrato.

### Componentes

| Componente | Responsabilidade |
|---|---|
| `ContractForm` | Estado do formulário, validação e gravação no `localStorage` |
| `Input` | Campo reutilizável com rótulo, indicação de obrigatório, modo somente leitura e exibição de erro |
| `Button` | Botão principal |
| `ErrorMessage` / `SuccessMessage` | Mensagens de retorno |

---

## 🛠️ Tecnologias

- **React 19** + **Vite 7**
- **API Web do Spotify** (fluxo Client Credentials)
- **CSS puro**, dividido em `app.css`, `form.css` e `search.css`
- **localStorage** para persistência
- **ESLint** (plugins React Hooks e React Refresh)

---

## ▶️ Como executar

1. Crie um app no [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) para obter um client ID e um secret.
2. Clone e instale:
   ```bash
   git clone https://github.com/pedromcd/Artist-hiring-app.git
   cd Artist-hiring-app
   npm install
   ```
3. Crie um arquivo `.env` na raiz do projeto:
   ```env
   VITE_SPOTIFY_CLIENT_ID=seu_client_id
   VITE_SPOTIFY_CLIENT_SECRET=seu_client_secret
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   Abra o endereço mostrado pelo Vite (normalmente `http://localhost:5173`).

Outros scripts: `npm run build`, `npm run preview`, `npm run lint`.

---

## 🧩 Estrutura

```text
src/
├── App.jsx               # Estado da tela e artista selecionado
├── main.jsx              # Ponto de entrada
├── components/           # ContractForm, Input, Button, ErrorMessage, SuccessMessage
├── pages/                # SearchArtists, Contract, Success, ContractsList
├── services/spotify.js   # Autenticação e busca no Spotify
└── styles/               # app.css, form.css, search.css
```

---

## ⚠️ Limitações e próximos passos

- **O secret do Spotify chega ao navegador.** Variáveis com prefixo `VITE_` são incluídas no bundle do cliente, então esta configuração serve só para desenvolvimento local. O próximo passo é um backend pequeno (ou uma função serverless) que solicite o token e mantenha o secret no servidor.
- **Persistência apenas local:** os contratos ficam no `localStorage` do navegador. Uma versão real os guardaria em um banco de dados por trás de uma API, com contas de usuário.
- **Mais validações:** formato do cachê, datas de evento no passado e campos de endereço.
- **Testes** para a validação do formulário e para o serviço do Spotify.

---

## 👨‍💻 Autor

**Pedro Marques Correa Domingues** · [GitHub](https://github.com/pedromcd) · [Portfólio](https://pedromcd.github.io)
