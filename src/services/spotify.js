/*
 * Spotify API service
 *
 * NOTE:
 * Spotify does not provide a true "trending artists" endpoint.
 * Because of that, we simulate trending artists by performing
 * a generic search using popular keywords (e.g. "pop").
 * This approach is used only to improve UX.
 */

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

const TOKEN_URL = "https://accounts.spotify.com/api/token";
const SEARCH_URL = "https://api.spotify.com/v1/search";

let accessToken = null; // Cache token to avoid multiple requests

// -------------------------------
// Get Spotify access token (Client Credentials Flow)
// -------------------------------
async function getAccessToken() {
  if (accessToken) return accessToken;

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
    },
    body: "grant_type=client_credentials",
  });

  if (!response.ok) {
    throw new Error("Failed to authenticate with Spotify");
  }

  const data = await response.json();
  accessToken = data.access_token;
  return accessToken;
}

// -------------------------------
// Search artists by name
// -------------------------------
export async function searchArtists(query) {
  try {
    const token = await getAccessToken();

    const response = await fetch(
      `${SEARCH_URL}?q=${encodeURIComponent(query)}&type=artist&limit=12`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Spotify search request failed");
    }

    const data = await response.json();

    // Return artist list or empty array if undefined
    return data.artists?.items || [];
  } catch (error) {
    console.error("Spotify search error:", error);
    return [];
  }
}

// -------------------------------
// Get "trending" artists (simulated)
// -------------------------------
export async function getTrendingArtists() {
  try {
    const token = await getAccessToken();

    // Perform a generic search using popular keywords
    const response = await fetch(
      `${SEARCH_URL}?q=pop&type=artist&limit=12`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Spotify trending request failed");
    }

    const data = await response.json();

    // Return artist list or empty array if undefined
    return data.artists?.items || [];
  } catch (error) {
    console.error("Spotify trending error:", error);
    return [];
  }
}
