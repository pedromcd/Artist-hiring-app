import { useState } from "react";
import { searchArtists } from "../services/spotify";

/*
 * Artist search page
 */
export default function SearchArtists({ onSelectArtist }) {
  const [query, setQuery] = useState("");
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(e) {
    e.preventDefault();
    if (!query) return;

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
            <button onClick={() => onSelectArtist(artist.name)}>
              {artist.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
