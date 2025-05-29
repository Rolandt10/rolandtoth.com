import { useEffect, useState } from "react";
import {
  LinkIcon,
  TwitterIcon,
  FacebookIcon,
  RedditIcon,
} from "../Icons/Icons";

export default function ShareButtons() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  });

  const copyLink = () => {
    navigator.clipboard.writeText(url).then(() => alert("Copied!"));
  };

  return (
    <div className="flex gap-2">
      <a
        onClick={copyLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Copy link"
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border dark:border-dark-500 dark:bg-dark-700 hover:dark:border-dark-400/50"
      >
        <LinkIcon size={16} stroke-width="1.6" />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border dark:border-dark-500 dark:bg-dark-700 hover:dark:border-dark-400/50"
      >
        <TwitterIcon size={15} stroke-width="0.1" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border pr-[1px] dark:border-dark-500 dark:bg-dark-700 hover:dark:border-dark-400/50"
      >
        <FacebookIcon size={17} stroke-width="1.6" />
      </a>
      <a
        href={`https://www.reddit.com/submit?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Reddit"
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border pl-[2px] pt-[3px] dark:border-dark-500 dark:bg-dark-700 hover:dark:border-dark-400/50"
      >
        <RedditIcon size={19} stroke-width="0.3" stroke-linejoin="round" />
      </a>
    </div>
  );
}
