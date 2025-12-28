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

git clone https://github.com/your-username/artist-hiring-app.git
cd artist-hiring-app

2. Install dependencies

npm install

Note: The project was initialized with Vite and React.
If starting a new project from scratch, use:

npm create vite@latest my-app

cd my-app

npm install

3. Create a .env file in the project root and add your Spotify API credentials
Example .env content:

VITE_SPOTIFY_CLIENT_ID=your_client_id
VITE_SPOTIFY_CLIENT_SECRET=your_client_secret

5. Run the app in development mode

npm run dev

---

## Usage
1. Open the app in the browser (Vite usually provides a local URL like http://localhost:5173).  
2. Search for an artist or select from trending artists.  
3. Fill out the contract form with client details.  
4. Submit the contract.  
5. View, delete, or manage contracts from the contract list screen.

---

## License
This project is open-source and available under the [MIT License](LICENSE).
