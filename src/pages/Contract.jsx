import { useState } from "react";
import SearchArtists from "../pages/SearchArtists";
import ContractForm from "../components/ContractForm";

/*
 * Contract page
 * Handles artist selection and contract creation
 */
export default function Contract({ onSuccess }) {
  const [selectedArtist, setSelectedArtist] = useState(null);

  return (
    <section>
      <h1>Contrato de artista</h1>

      {/* If no artist selected, show search */}
      {!selectedArtist && (
        <SearchArtists onSelectArtist={setSelectedArtist} />
      )}

      {/* If artist selected, show form */}
      {selectedArtist && (
        <>
          <button
            onClick={() => setSelectedArtist(null)}
            className="btn-secondary"
            style={{ marginBottom: "1rem" }}
          >
            Escolher outro artista
          </button>

          <ContractForm artist={selectedArtist} onSuccess={onSuccess} />
        </>
      )}
    </section>
  );
}
