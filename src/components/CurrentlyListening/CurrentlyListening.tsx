import { MusicIcon } from "../Icons/Icons.tsx";
import SongCard from "./SongCard.tsx";
import { useCurrentSong } from "../../hooks/useCurrentSong.ts";

export default function CurrentSong() {
  const { song, error } = useCurrentSong();

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

  return <SongCard song={song} />;
}
