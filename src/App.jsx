import { useState } from "react";
import SearchArtists from "./pages/SearchArtists";
import Contract from "./pages/Contract";
import Success from "./pages/Success";
import ContractsList from "./pages/ContractsList";

/*
 * Main application component
 */
function App() {
  const [screen, setScreen] = useState("search");
  const [selectedArtist, setSelectedArtist] = useState(null);

  return (
    <main>
      {screen === "search" && (
        <SearchArtists
          onSelectArtist={(artist) => {
            setSelectedArtist(artist);
            setScreen("form");
          }}
        />
      )}

      {screen === "form" && (
        <Contract
          artist={selectedArtist}
          onSuccess={() => setScreen("success")}
        />
      )}

      {screen === "success" && (
        <Success
          onNewContract={() => setScreen("search")}
          onViewContracts={() => setScreen("list")}
        />
      )}

      {screen === "list" && (
        <ContractsList onBack={() => setScreen("search")} />
      )}
    </main>
  );
}

export default App;
