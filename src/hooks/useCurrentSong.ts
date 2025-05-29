import { useEffect, useState } from "react";

const API_URL =
  "https://za0j0wwqi3.execute-api.us-east-1.amazonaws.com/prod/currently-listening";

interface SongData {
  song: string;
  artists: string[];
  album_cover: string;
  external_url: string;
  is_playing: boolean;
  last_played_timestamp: number;
}

export function useCurrentSong() {
  const [song, setSong] = useState<SongData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch song");
        const data = await res.json();
        setSong(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchSong();
    const interval = setInterval(fetchSong, 7500);
    return () => clearInterval(interval);
  });

  return { song, error };
}
