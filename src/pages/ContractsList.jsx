/*
 * Page to list submitted contracts
 */
export default function ContractsList({ onBack }) {
  const contracts =
    JSON.parse(localStorage.getItem("contracts")) || [];

  return (
    <section>
      <h1>Submitted Contracts</h1>

      {contracts.length === 0 && (
        <p>No contracts submitted yet.</p>
      )}

      {contracts.length > 0 && (
        <ul>
          {contracts.map((contract) => (
            <li key={contract.id}>
              <strong>{contract.artist}</strong> —{" "}
              {contract.clientName} ({contract.eventDate})
            </li>
          ))}
        </ul>
      )}

      <button onClick={onBack}>Back</button>
    </section>
  );
}
