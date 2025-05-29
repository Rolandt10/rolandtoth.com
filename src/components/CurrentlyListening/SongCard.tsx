import { useEffect, useState } from "react";
import { PauseIcon, PlayIcon } from "../Icons/Icons.tsx";
import { timeAgo } from "../../utils/helper.ts";

export default function SongCard({ song }) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev === "..." ? "." : prev + "."));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
