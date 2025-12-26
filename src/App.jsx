import { useState } from "react";
import Contract from "./pages/Contract";
import Success from "./pages/Success";

/*
 * Main application component
 */
function App() {
  const [screen, setScreen] = useState("form");

  return (
    <main>
      {screen === "form" && (
        <Contract onSuccess={() => setScreen("success")} />
      )}

      {screen === "success" && (
        <Success onNewContract={() => setScreen("form")} />
      )}
    </main>
  );
}

export default App;
