import ContractForm from "../components/ContractForm";
/*
 * Contract page
 * Receives selected artist and renders the contract form
 */
export default function Contract({ artist, onSuccess }) {
  return (
    <section>
      <h1>Artist Contract</h1>
      <ContractForm artist={artist} onSuccess={onSuccess} />
    </section>
  );
}
