# VERSÃO EM PORTUGUÊS


# Aplicativo de Contratação de Artistas 🎤

## Tabela de Conteúdos
- [Visão Geral](#visão-geral)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Uso](#uso)
- [Licença](#licença)

---

## Visão Geral
O **Aplicativo de Contratação de Artistas** permite que os usuários pesquisem artistas musicais, selecionem um e enviem uma solicitação de contrato com detalhes como nome do cliente, data do evento, valor do cachê e endereço. Os usuários também podem visualizar e gerenciar os contratos enviados.

O app busca dados de artistas da **Spotify API** e oferece uma experiência fluida com animações, tratamento de erros e componentes interativos.

---

## Tecnologias
- **Frontend:** React (Vite)  
- **CSS:** Vanilla CSS (modularizado em `app.css`, `form.css`, `search.css`)  
- **Armazenamento de dados:** LocalStorage (atualmente, pode ser substituído por um banco de dados)  
- **Integração com API:** Spotify Web API (Client Credentials Flow)  
- **Controle de Versão:** Git + GitHub  

---

## Estrutura do Projeto
src/  
├── components/  
│   ├── ContractForm.jsx  
│   ├── Input.jsx  
│   ├── Button.jsx  
│   └── ErrorMessage.jsx  
│  
├── pages/  
│   ├── SearchArtists.jsx  
│   ├── Contract.jsx  
│   ├── Success.jsx  
│   └── ContractsList.jsx  
│  
├── services/  
│   └── spotify.js  
│  
├── styles/  
│   ├── app.css  
│   ├── form.css  
│   └── search.css  
│  
├── App.jsx  
└── main.jsx  

---

## Funcionalidades
- Pesquisar artistas usando a Spotify API  
- Exibir artistas em destaque quando nenhuma pesquisa é realizada  
- Selecionar um artista e preencher o formulário de contrato  
- Validar campos obrigatórios com mensagens de erro  
- Enviar contrato e armazenar no LocalStorage  
- Visualizar contratos enviados em uma tabela estruturada  
- Excluir contratos enviados  
- Possibilidade de selecionar outro artista caso tenha sido escolhido errado  
- Animações e transições para melhor experiência do usuário (UX)

---

## Instalação

1. Clone o repositório:

```
git clone https://github.com/pedromcd/Artist-hiring-app.git
cd artist-hiring-app
```

2. Instalar dependências
```
npm install
```
Observação: O projeto foi iniciado com Vite e React.
Caso comece um projeto do zero, use:
```
npm create vite@latest my-app
cd my-app
npm install
```
3. Criar arquivo .env na raiz do projeto e adicionar suas credenciais da Spotify API
Exemplo de conteúdo do .env
```
VITE_SPOTIFY_CLIENT_ID=seu_client_id
VITE_SPOTIFY_CLIENT_SECRET=seu_client_secret
```
4. Executar o app em modo de desenvolvimento
```
npm run dev
```
## Uso

 Abra o app no navegador (Vite geralmente fornece uma URL local como http://localhost:5173).

 Pesquise um artista ou selecione um dos artistas em destaque.

 Preencha o formulário de contrato com os dados do cliente.

 Envie o contrato.

 Visualize, os contratos na tela de lista de contratos, existe também a opção de excluir os contratos existentes.

## Licença

 Este projeto é open-source e está disponível sob a Licença MIT

________________________________________________________________________________________________________________

# ENGLISH VERSION


# Artist Hiring App 🎤

## Table of Contents
- [Overview](#overview)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

---

## Overview
The **Artist Hiring App** allows users to search for music artists, select one, and submit a contract request with details such as client name, event date, fee, and address. Users can view submitted contracts and manage them.

The app fetches artist data from the **Spotify API** and provides a smooth user experience with animations, error handling, and interactive components.

---

## Technologies
- **Frontend:** React (Vite)  
- **CSS:** Vanilla CSS (modularized into `app.css`, `form.css`, `search.css`)  
- **Data storage:** LocalStorage (currently, can be replaced with a database)  
- **API integration:** Spotify Web API (Client Credentials Flow)  
- **Version Control:** Git + GitHub  

---

## Project Structure
src/  
├── components/  
│   ├── ContractForm.jsx  
│   ├── Input.jsx  
│   ├── Button.jsx  
│   └── ErrorMessage.jsx  
│  
├── pages/  
│   ├── SearchArtists.jsx  
│   ├── Contract.jsx  
│   ├── Success.jsx  
│   └── ContractsList.jsx  
│  
├── services/  
│   └── spotify.js  
│  
├── styles/  
│   ├── app.css  
│   ├── form.css  
│   └── search.css  
│  
├── App.jsx  
└── main.jsx  

---

## Features
- Search for artists using Spotify API  
- Display trending artists when no search is performed  
- Select an artist and fill in a contract form  
- Validate required fields with error messages  
- Submit contract and store it in LocalStorage  
- View submitted contracts in a structured table  
- Delete submitted contracts  
- Ability to select a different artist if a mistake is made  
- Animations and transitions for better UX

---

## Installation
1. Clone the repository
```
git clone (https://github.com/pedromcd/Artist-hiring-app.git)
cd artist-hiring-app
```
2. Install dependencies
```
npm install
```
Note: The project was initialized with Vite and React.
If starting a new project from scratch, use:
```
npm create vite@latest my-app
cd my-app
npm install
```
3. Create a .env file in the project root and add your Spotify API credentials
Example .env content:
```
VITE_SPOTIFY_CLIENT_ID=your_client_id
VITE_SPOTIFY_CLIENT_SECRET=your_client_secret
```
4. Run the app in development mode
```
npm run dev
```
---

## Usage
1. Open the app in the browser (Vite usually provides a local URL like http://localhost:5173).  
2. Search for an artist or select from trending artists.  
3. Fill out the contract form with client details.  
4. Submit the contract.  
5. View the contracts from the contract list screen, you can also delete a existing contract

---

## License
This project is open-source and available under the [MIT License](LICENSE).
