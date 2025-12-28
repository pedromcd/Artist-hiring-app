import { useEffect, useState } from "react";

/*
 * Displays stored artist contracts
 * Loads data from localStorage and lists them
 */
export default function ContractsList({ onBack }) {
  const [contracts, setContracts] = useState([]);

  // Load contracts from localStorage on initial render
  useEffect(() => {
    const storedContracts =
      JSON.parse(localStorage.getItem("contracts")) || [];
    setContracts(storedContracts);
  }, []);

  return (
    <section>
      <h1>Submitted Contracts</h1>

      {contracts.length === 0 && <p>No contracts found.</p>}

      <ul>
        {contracts.map((contract, index) => (
          <li key={index}>
            {contract.clientName} - {contract.artist.name || contract.artist} - {contract.eventDate}
          </li>
        ))}
      </ul>

      <button onClick={onBack}>Back</button>
    </section>
  );
}
