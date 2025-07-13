import { useEffect, useState } from "react";
import {
  LinkIcon,
  TwitterIcon,
  FacebookIcon,
  RedditIcon,
} from "../Icons/Icons";
import Tooltip from "../Tooltip/Tooltip";

export default function ShareButtons() {
  const [url, setUrl] = useState("");
  const [tooltipText, setTooltipText] = useState("Copy link");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setUrl(window.location.href);
  });

  const copyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setTooltipText("Copied!");
      setOpen(true);
      setTimeout(() => {
        setTooltipText("Copy link");
        setOpen(false);
      }, 1500);
    });
  };

  return (
    <div className="flex gap-2">
      <ul className="flex gap-2">
        <li>
          <Tooltip
            text={tooltipText}
            delayDuration={0}
            open={open}
            onOpenChange={setOpen}
          >
            <a
              onClick={copyLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={tooltipText}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border dark:border-dark-500 dark:bg-dark-700 hover:dark:border-dark-400/50"
            >
              <LinkIcon size={16} strokeWidth="1.6" />
            </a>
          </Tooltip>
        </li>
        <li>
          <Tooltip text={"Twitter / X"} delayDuration={0}>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Twitter"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border dark:border-dark-500 dark:bg-dark-700 hover:dark:border-dark-400/50"
            >
              <TwitterIcon size={15} strokeWidth="0.1" />
            </a>
          </Tooltip>
        </li>
        <li>
          <Tooltip text={"Facebook"} delayDuration={0}>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border pr-[1px] dark:border-dark-500 dark:bg-dark-700 hover:dark:border-dark-400/50"
            >
              <FacebookIcon size={17} strokeWidth="1.6" />
            </a>
          </Tooltip>
        </li>
        <li>
          <Tooltip text={"Reddit"} delayDuration={0}>
            <a
              href={`https://www.reddit.com/submit?url=${encodeURIComponent(url)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Reddit"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border pl-[2px] pt-[3px] dark:border-dark-500 dark:bg-dark-700 hover:dark:border-dark-400/50"
            >
              <RedditIcon size={19} strokeWidth="0.3" strokeLinejoin="round" />
            </a>
          </Tooltip>
        </li>
      </ul>
    </div>
  );
}
