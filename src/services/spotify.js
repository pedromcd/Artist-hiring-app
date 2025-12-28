/*
 * Spotify API service
 * Uses Client Credentials Flow to fetch artist data
 */

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

const TOKEN_URL = "https://accounts.spotify.com/api/token";
const SEARCH_URL = "https://api.spotify.com/v1/search";

let accessToken = null;

// Get Spotify access token
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

  const data = await response.json();
  accessToken = data.access_token;

  return accessToken;
}

/*
 * Search artists by name
 */
export async function searchArtists(query) {
  const token = await getAccessToken();

  const response = await fetch(
    `${SEARCH_URL}?q=${encodeURIComponent(query)}&type=artist&limit=10`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  return data.artists.items;
}

/*
 * IMPORTANT:
 * Spotify does not provide a public endpoint for "trending" or "popular" artists.
 * To simulate this behavior, i performed a generic search using a popular keyword
 * ("pop") and rely on Spotify's internal relevance and popularity ranking.
 * This approach is used only to provide initial suggestions to the user.
 */
export async function getTrendingArtists() {
  const token = await getAccessToken();

  const response = await fetch(
    `${SEARCH_URL}?q=pop&type=artist&limit=12`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  return data.artists.items;
}
 