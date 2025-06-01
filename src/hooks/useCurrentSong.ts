import { useEffect, useState } from "react";
import useSWR from "swr";

const API_URL =
  "https://za0j0wwqi3.execute-api.us-east-1.amazonaws.com/prod/currently-listening";

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  });

export function useCurrentSong() {
  const { data: song, error } = useSWR(API_URL, fetcher, {
    refreshInterval: 7500,
    revalidateOnFocus: true,
    keepPreviousData: true,
    refreshWhenHidden: false,
  });

  return { song, error: error?.message ?? null };
}
