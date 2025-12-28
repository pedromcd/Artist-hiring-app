import { useState } from "react";
import SearchArtists from "./pages/SearchArtists";
import Contract from "./pages/Contract";
import Success from "./pages/Success";
import ContractsList from "./pages/ContractsList";

/*
 * Main application component
 * Controls navigation between screens and stores the selected artist
 */
function App() {
  // Current screen: "search", "form", "success", or "list"
  const [screen, setScreen] = useState("search");

  // Currently selected artist object from search
  const [selectedArtist, setSelectedArtist] = useState(null);

  return (
    // Adding class for screen fade-in animation
    <main className="screen">
      {/* Search screen */}
      {screen === "search" && (
        <SearchArtists
          onSelectArtist={(artist) => {
            setSelectedArtist(artist); // Save artist selection
            setScreen("form");         // Navigate to contract form
          }}
        />
      )}

      {/* Contract form screen */}
      {screen === "form" && (
        <Contract
          artist={selectedArtist}
          onSuccess={() => setScreen("success")} // Navigate to success after submission
        />
      )}

      {/* Success screen */}
      {screen === "success" && (
        <Success
          onNewContract={() => setScreen("search")}   // Start a new contract
          onViewContracts={() => setScreen("list")}   // View submitted contracts
        />
      )}

      {/* Contracts list screen */}
      {screen === "list" && (
        <ContractsList onBack={() => setScreen("search")} /> // Go back to search
      )}
    </main>
  );
}

export default App;
