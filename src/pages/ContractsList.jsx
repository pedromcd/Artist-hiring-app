import { useEffect, useState } from "react";

/*
 * Displays stored artist contracts
 * Organized in a table for better readability
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

      {contracts.length === 0 ? (
        <p>No contracts found.</p>
      ) : (
        <table className="contracts-table">
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Artist</th>
              <th>Fee</th>
              <th>Event Date</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {contracts.map((contract, index) => (
              <tr key={index}>
                <td>{contract.clientName}</td>
                <td>{contract.artist}</td>
                <td>{contract.fee || "-"}</td>
                <td>{contract.eventDate}</td>
                <td>{contract.address || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button onClick={onBack}>Back</button>
    </section>
  );
}
