import ContractForm from "../components/ContractForm";

/*
 * Contract page
 * Receives the selected artist and renders the contract form
 * Handles submission via onSuccess callback
 */
export default function Contract({ artist, onSuccess }) {
  return (
    <section>
      <h1>Artist Contract</h1>
      <ContractForm artist={artist} onSuccess={onSuccess} />
    </section>
  );
}
