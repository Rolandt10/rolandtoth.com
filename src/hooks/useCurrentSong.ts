import { useEffect, useRef, useState } from "react";
import useSWR from "swr";

const WEBSOCKET_API_URL =
  "wss://c03e060se2.execute-api.us-east-1.amazonaws.com/production/";

// const fetcher = (url: string) =>
//   fetch(url).then((res) => {
//     if (!res.ok) throw new Error("Failed to fetch");
//     return res.json();
//   });

export function useCurrentSong() {
  const [song, setSong] = useState();
  const [error, setError] = useState(null);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const cachedSong = localStorage.getItem("current-song");
    if (cachedSong) {
      setSong(JSON.parse(cachedSong));
    }

    const ws = new WebSocket(WEBSOCKET_API_URL);
    socketRef.current = ws;

    ws.onopen = () => {
      // console.log("Connected to Websocket!");

      socketRef.current.send(JSON.stringify({ action: "init" }));
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setSong(data);
        localStorage.setItem("current-song", JSON.stringify(data));
      } catch (err) {
        setError("Failed to parse song data!");
      }
    };

    ws.onerror = (err) => {
      console.error("An error happened", err);
      setError("Websocket error");
    };

    return () => {
      ws.close();
    };
  }, []);

  return { song, error };

  // const { data: song, error } = useSWR(API_URL, fetcher, {
  //   refreshInterval: 7500,
  //   revalidateOnFocus: true,
  //   keepPreviousData: true,
  //   refreshWhenHidden: false,
  // });

  // return { song, error: error?.message ?? null };
}
