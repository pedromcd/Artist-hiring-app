import { useState } from "react";
import Contract from "./pages/Contract";
import Success from "./pages/Success";
import ContractsList from "./pages/ContractsList";

/*
 * Main application component
 * Controls navigation flow between application screens
 */
function App() {
  const [screen, setScreen] = useState("form");

  return (
    <main>
      {screen === "form" && (
        <Contract onSuccess={() => setScreen("success")} />
      )}

      {screen === "success" && (
        <Success
          onNewContract={() => setScreen("form")}
          onViewContracts={() => setScreen("list")}
        />
      )}

      {screen === "list" && (
        <ContractsList onBack={() => setScreen("form")} />
      )}
    </main>
  );
}

export default App;
