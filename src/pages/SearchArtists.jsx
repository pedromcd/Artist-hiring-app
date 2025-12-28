import { useEffect, useState } from "react";
import { searchArtists, getTrendingArtists } from "../services/spotify";

/*
 * Artist search page
 * Shows trending artists initially and allows searching by name
 * Handles loading and errors for better UX
 */
export default function SearchArtists({ onSelectArtist }) {
  const [query, setQuery] = useState(""); // User search input
  const [artists, setArtists] = useState([]); // List of artists to display
  const [loading, setLoading] = useState(false); // Loading indicator
  const [error, setError] = useState(""); // Error message for API issues or empty results

  // Fetch trending artists on initial render
  useEffect(() => {
    async function loadTrending() {
      setLoading(true);
      setError("");
      try {
        const results = await getTrendingArtists(); // Call Spotify API (or fallback)
        setArtists(results);
      } catch (err) {
        console.error(err);
        setError("Falha ao carregar artistas do momento."); // Show error if request fails
      }
      setLoading(false);
    }

    loadTrending();
  }, []);

  // Handle search form submission
  async function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    try {
      const results = await searchArtists(query); // Fetch artists from Spotify API
      if (results.length === 0) setError("Nenhum artista encontrado.");
      setArtists(results);
    } catch (err) {
      console.error(err);
      setError("Falha ao procurar artistas."); // Show error if request fails
    }
    setLoading(false);
  }

  return (
    <section>
      <h2>Procurar Artista</h2>

      {/* Search form */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Procurar nome de artista"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Procurar</button>
      </form>

      {/* Loading and error feedback */}
      {loading && <p>Carregando artistas...</p>}
      {error && <p className="error-text">{error}</p>}

      {/* Artist results with fade-in animation */}
      <ul className="artist-list">
        {artists.map((artist, index) => (
          <li key={artist.id} style={{ animationDelay: `${index * 0.1}s` }}>
            <button onClick={() => onSelectArtist(artist)}>
              {artist.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
