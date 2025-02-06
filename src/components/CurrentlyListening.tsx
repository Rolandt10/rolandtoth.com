import { useState, useEffect } from "react";
import { MusicIcon } from "./Icons";

const API_URL =
  "https://adovd1cm2g.execute-api.us-east-1.amazonaws.com/production/currently-playing";

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

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch song");
        const data = await response.json();
        setSong(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchSong();
    const interval = setInterval(fetchSong, 30000);

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
          className="h-16 w-16 rounded-md object-cover"
          src={song.album_cover}
          alt=""
        />
        <div className="flex flex-col gap-1">
          <div className="text-base leading-none">{song.song}</div>
          <div className="text-wrap text-sm dark:text-dark-300">
            {song.artists.join(", ")}
          </div>
          <div className="w-max rounded-full bg-dark-600 px-2 text-[0.8rem] text-dark-200">
            {song.is_playing
              ? "Now playing"
              : timeAgo(song.last_played_timestamp)}
          </div>
        </div>
      </a>
    </>
  );
}
