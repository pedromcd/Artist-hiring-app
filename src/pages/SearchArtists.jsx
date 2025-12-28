import { useEffect, useState } from "react";
import { searchArtists, getTrendingArtists } from "../services/spotify";

/*
 * Artist search page
 * Displays trending artists when no search is performed
 */
export default function SearchArtists({ onSelectArtist }) {
  const [query, setQuery] = useState("");
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load trending artists on initial render
  useEffect(() => {
    async function loadTrending() {
      setLoading(true);
      const results = await getTrendingArtists();
      setArtists(results);
      setLoading(false);
    }

    loadTrending();
  }, []);

  async function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    const results = await searchArtists(query);
    setArtists(results);
    setLoading(false);
  }

  return (
    <section>
      <h1>Search Artist</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search artist name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading artists...</p>}

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
