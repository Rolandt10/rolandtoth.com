import { useState } from "react";
import CommandMenu from "./CommandMenu";
import { HomeIcon, MenuIcon } from "../Icons";
import ThemeToggle from "./ThemeToggle";

const Header = ({ currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isHomePage = currentPath === "/";

  return (
    <header className="flex items-center [grid-area:header]">
      <ul className="flex gap-3">
        <li>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-light-300 bg-light-200 text-light-400 shadow transition-all duration-200 hover:scale-110 hover:shadow-md dark:border-dark-500 dark:bg-dark-700"
          >
            <MenuIcon
              size={20}
              className="dark:text-dark-100"
              stroke-width="1.8"
            />
          </button>
        </li>
        {!isHomePage && (
          <li>
            <a
              href="/"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-light-300 bg-light-200 text-light-400 shadow transition-all duration-200 hover:scale-105 hover:shadow-md dark:border-dark-500 dark:bg-dark-700"
            >
              <HomeIcon
                size={20}
                className="dark:text-dark-100"
                stroke-width="1.8"
              />
            </a>
          </li>
        )}
      </ul>
      <div className="ml-auto text-light-400">
        <ThemeToggle />
      </div>
      <CommandMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
