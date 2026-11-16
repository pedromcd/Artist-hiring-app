**English** | [Português](README.pt-BR.md)

# 🎤 Artist Hiring App

**A React single-page app for booking music artists: search artists through the Spotify Web API, pick one, fill in a validated contract form, and manage the submitted contracts.**

A front-end project built with React 19 and Vite, focused on component design, form validation, external API integration, and a clear multi-step user flow.

---

## 🎯 Goal

Event organizers who want to hire an artist usually juggle several channels to find the artist, collect booking details, and keep track of requests. This app puts that flow into four screens:

```text
Search artist  →  Contract form  →  Confirmation  →  Contract list
```

From a technical point of view, the goal was to practice:

- integrating a **real third-party API** with OAuth-style authentication;
- building **reusable components** (inputs, buttons, messages);
- **form state and validation** in React;
- managing navigation and shared state **without extra libraries**.

---

## ✨ Features

- **Artist search** by name through the Spotify Web API (up to 12 results, shown as a staggered animated list).
- **Suggested artists on first load**, so the screen is never empty.
- **Contract form** with client name, event date, fee, and address; the selected artist's name is filled in automatically.
- **Validation** of required fields with inline error messages.
- **Change the artist** in the middle of the form if the wrong one was picked.
- **Confirmation screen** with options to start a new contract or view all contracts.
- **Contract list** in a table, with **delete**.
- **Persistence** in the browser's `localStorage`.
- **Loading and error states** for API calls and empty results.
- **Screen transitions** with a fade-in animation.

The interface text is in Portuguese.

---

## 🧠 How it works

### Spotify integration (`src/services/spotify.js`)

- Authenticates with the **Client Credentials flow**: the client ID and secret are exchanged for an access token at `accounts.spotify.com/api/token`.
- The token is **cached in memory**, so it is requested only once per session.
- Searches call `GET /v1/search?type=artist&limit=12`.
- Spotify has no "trending artists" endpoint, so the initial suggestions come from a generic search with a popular keyword. This is documented in the code as a UX decision.

### Navigation and state (`src/App.jsx`)

- A single `screen` state (`search`, `form`, `success`, `list`) controls which page is rendered, a deliberate choice to keep the app small and dependency-free instead of adding a router.
- The selected artist is lifted to `App` and passed down to the contract page.

### Components

| Component | Responsibility |
|---|---|
| `ContractForm` | Form state, validation, and saving to `localStorage` |
| `Input` | Reusable field with label, required flag, read-only mode, and error display |
| `Button` | Primary button |
| `ErrorMessage` / `SuccessMessage` | Feedback messages |

---

## 🛠️ Tech stack

- **React 19** + **Vite 7**
- **Spotify Web API** (Client Credentials flow)
- **Plain CSS**, split into `app.css`, `form.css`, and `search.css`
- **localStorage** for persistence
- **ESLint** (React Hooks and React Refresh plugins)

---

## ▶️ Running it

1. Create an app in the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) to get a client ID and secret.
2. Clone and install:
   ```bash
   git clone https://github.com/pedromcd/Artist-hiring-app.git
   cd Artist-hiring-app
   npm install
   ```
3. Create a `.env` file in the project root:
   ```env
   VITE_SPOTIFY_CLIENT_ID=your_client_id
   VITE_SPOTIFY_CLIENT_SECRET=your_client_secret
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   Open the URL shown by Vite (usually `http://localhost:5173`).

Other scripts: `npm run build`, `npm run preview`, `npm run lint`.

---

## 🧩 Structure

```text
src/
├── App.jsx               # Screen state and selected artist
├── main.jsx              # Entry point
├── components/           # ContractForm, Input, Button, ErrorMessage, SuccessMessage
├── pages/                # SearchArtists, Contract, Success, ContractsList
├── services/spotify.js   # Spotify authentication and search
└── styles/               # app.css, form.css, search.css
```

---

## ⚠️ Limitations and next steps

- **The Spotify secret reaches the browser.** Variables prefixed with `VITE_` are embedded in the client bundle, so this setup is suitable for local development only. The next step is a small backend (or serverless function) that requests the token and keeps the secret on the server.
- **Local persistence only:** contracts live in the browser's `localStorage`. A real version would store them in a database behind an API, with user accounts.
- **More validation:** fee format, event dates in the past, and address fields.
- **Tests** for the form validation and the Spotify service.

---

## 👨‍💻 Author

**Pedro Marques Correa Domingues** · [GitHub](https://github.com/pedromcd) · [Portfolio](https://pedromcd.github.io)
