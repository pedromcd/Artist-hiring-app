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
        setError("Failed to load trending artists."); // Show error if request fails
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
      if (results.length === 0) setError("No artists found. Try another search.");
      setArtists(results);
    } catch (err) {
      console.error(err);
      setError("Failed to search artists."); // Show error if request fails
    }
    setLoading(false);
  }

  return (
    <section>
      <h1>Search Artist</h1>

      {/* Search form */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search artist name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Loading and error feedback */}
      {loading && <p>Loading artists...</p>}
      {error && <p className="error-text">{error}</p>}

      {/* Artist results */}
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            <button onClick={() => onSelectArtist(artist)}>
              {artist.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
