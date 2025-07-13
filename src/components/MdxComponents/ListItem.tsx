import { Circle, Squiggle } from "../Icons/Icons";

interface Props {
  children: React.ReactNode;
  hasSublist?: boolean;
  isLast?: boolean;
}

export default function ListItem({
  children,
  hasSublist = false,
  isLast = false,
}: Props) {
  return (
    <li className="relative flex gap-3 dark:text-dark-300">
      <div className="relative flex flex-col items-center pt-[0.31rem]">
        <Circle
          size={12}
          strokeWidth={1.8}
          className="shrink-0"
          fill="#121416"
        />
        {!hasSublist && !isLast && (
          <div
            className={`absolute top-[26px] h-[calc(100%-11px)] w-[2px] rounded-lg dark:bg-dark-500/80`}
          />
        )}
        {hasSublist && (
          <div className="absolute left-[0.3125rem] top-5">
            <Squiggle
              size={20}
              viewBox="0 0 50 43"
              height="50"
              width="45"
              strokeWidth={2.4}
              className="text-dark-500/80"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col">{children}</div>
    </li>
  );
}
