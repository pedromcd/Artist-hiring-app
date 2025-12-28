import ContractForm from "../components/ContractForm";

/*
 * Contract page
 * Handles contract submission and persistence
 */
export default function Contract({ onSuccess }) {
  const selectedArtist = "Artist Name";

  // Save contract data to localStorage
  const saveContract = (contractData) => {
    const storedContracts =
      JSON.parse(localStorage.getItem("contracts")) || [];

    storedContracts.push(contractData);
    localStorage.setItem("contracts", JSON.stringify(storedContracts));
  };

  return (
    <section>
      <h1>Artist Contract</h1>

      <ContractForm
        selectedArtist={selectedArtist}
        onSubmit={(data) => {
          saveContract(data);
          onSuccess();
        }}
      />
    </section>
  );
}
