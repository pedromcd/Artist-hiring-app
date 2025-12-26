import ContractForm from "../components/ContractForm";

/*
 * Contract page
 */
export default function Contract({ onSuccess }) {
  const selectedArtist = "Artist Name";

  return (
    <section>
      <h1>Artist Contract</h1>
      <ContractForm artist={selectedArtist} onSuccess={onSuccess} />
    </section>
  );
}

