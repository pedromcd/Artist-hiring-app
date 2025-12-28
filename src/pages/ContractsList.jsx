import { useEffect, useState } from "react";

/*
 * Displays stored artist contracts
 * Allows deleting individual contracts
 */
export default function ContractsList({ onBack }) {
  const [contracts, setContracts] = useState([]);

  // Load contracts from localStorage
  useEffect(() => {
    const storedContracts =
      JSON.parse(localStorage.getItem("contracts")) || [];
    setContracts(storedContracts);
  }, []);

  // Delete a contract by its id
  const handleDelete = (id) => {
    const updated = contracts.filter((c) => c.id !== id);
    setContracts(updated);
    localStorage.setItem("contracts", JSON.stringify(updated));
  };

  return (
    <section>
      <h1>Submitted Contracts</h1>

      {contracts.length === 0 && <p>No contracts found.</p>}

      <table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Artist</th>
            <th>Event Date</th>
            <th>Fee</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((contract) => (
            <tr key={contract.id}>
              <td>{contract.clientName}</td>
              <td>{contract.artist.name}</td>
              <td>{contract.eventDate}</td>
              <td>{contract.fee}</td>
              <td>{contract.address}</td>
              <td>
                <button onClick={() => handleDelete(contract.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={onBack}>Back</button>
    </section>
  );
}
