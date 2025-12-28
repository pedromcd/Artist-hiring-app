import { useEffect, useState } from "react";

/*
 * Displays stored artist contracts
 */
export default function ContractsList({ onBack }) {
  const [contracts, setContracts] = useState([]);

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
            {contract.name} - {contract.artist} - {contract.date}
          </li>
        ))}
      </ul>

      <button onClick={onBack}>Back</button>
    </section>
  );
}
