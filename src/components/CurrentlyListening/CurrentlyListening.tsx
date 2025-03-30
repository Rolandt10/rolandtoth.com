import { useState, useEffect } from "react";
import { MusicIcon, PauseIcon, PlayIcon } from "../Icons/Icons.tsx";

const API_URL =
  "https://za0j0wwqi3.execute-api.us-east-1.amazonaws.com/prod/currently-listening";

function timeAgo(timestamp) {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - timestamp) / 1000);

  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) {
    return seconds === 1 ? "a second ago" : `${seconds} seconds ago`;
  }

  if (minutes < 60) {
    return minutes === 1 ? "a minute ago" : `${minutes} minutes ago`;
  }

  if (hours < 24) {
    return hours === 1 ? "an hour ago" : `${hours} hours ago`;
  }

  if (days < 30) {
    return days === 1 ? "a day ago" : `${days} days ago`;
  }

  if (months < 12) {
    return months === 1 ? "a month ago" : `${months} months ago`;
  }

  return years === 1 ? "a year ago" : `${years} years ago`;
}

export default function CurrentSong() {
  const [song, setSong] = useState(null);
  const [error, setError] = useState(null);

  const [dots, setDots] = useState("");

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) throw new Error("Failed to fetch song");
        const data = await response.json();
        setSong(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchSong();
    const interval = setInterval(fetchSong, 7500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev === "..." ? "." : prev + "."));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (error) {
    return (
      <>
        <div>
          <div className="flex h-16 w-16 items-center justify-center rounded-md border-[1px] border-solid border-dark-600 dark:bg-dark-700">
            <MusicIcon
              size={24}
              stroke-width="1.6"
              className="dark:text-dark-300"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="leading-none">Couldn't load song</p>
        </div>
      </>
    );
  }
  if (!song) return <p>Loading song...</p>;

  return (
    <>
      <a href={song.external_url} className="flex gap-4">
        <img
          className="h-[4.1343rem] w-[4.1343rem] rounded-md object-cover shadow-md"
          src={song.album_cover}
          alt=""
        />
        <div className="flex flex-col gap-1">
          <p className="text-base leading-none">{song.song}</p>
          <p className="text-wrap text-sm text-light-400 dark:text-dark-300">
            {song.artists.join(", ")}
          </p>
          <div
            className={`${song.is_playing ? "w-[7.375rem]" : "w-max"} flex items-center gap-1 rounded-full bg-light-300/30 pr-2 text-[0.78rem] text-light-400 dark:bg-dark-600 dark:text-dark-200`}
          >
            <div className="flex items-center justify-center rounded-full border border-light-400/30 bg-light-300/20 p-1 dark:border-dark-400/50 dark:bg-dark-500">
              {song.is_playing ? (
                <PlayIcon
                  size={12}
                  className="relative right-[-1px] text-[0.8rem] dark:text-dark-200"
                />
              ) : (
                <PauseIcon
                  size={12}
                  className="text-[0.8rem] text-light-400 dark:text-dark-200"
                />
              )}
            </div>
            {song.is_playing ? (
              <div>
                Now playing<span>{dots}</span>
              </div>
            ) : (
              timeAgo(song.last_played_timestamp)
            )}
          </div>
        </div>
      </a>
    </>
  );
}
