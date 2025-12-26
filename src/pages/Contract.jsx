import ContractForm from "../components/ContractForm";

/*
* Contract page
* Responsible for rendering the artist contract form
*/
export default function Contract() {
  // Temporary artist mock (will come from search later)
  const selectedArtist = "Artist Name";

  return (
    <section>
      <h1>Artist Contract</h1>
      <ContractForm artist={selectedArtist} />
    </section>
  );
}
