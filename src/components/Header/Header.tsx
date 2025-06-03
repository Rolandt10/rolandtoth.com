import { useEffect, useState } from "react";
import CommandMenu from "../CommandMenu/CommandMenu";
import { HomeIcon, MenuIcon } from "../Icons/Icons";
import Tooltip from "../Tooltip/Tooltip";

const Header = ({ currentPath }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  //const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);

  const isHomePage = currentPath === "/";

  // useEffect(() => {
  //   const previousPath = sessionStorage.getItem("previousPath");

  //   if (!isHomePage && previousPath === "/") {
  //     setShouldAnimate(true);
  //   } else {
  //     setShouldAnimate(false);
  //   }

  //   if (currentPath !== previousPath) {
  //     sessionStorage.setItem("previousPath", currentPath);
  //   }
  // }, [currentPath, isHomePage]);

  return (
    <header className="flex items-center [grid-area:header]">
      <ul className="relative flex gap-3">
        <li className="z-10">
          <Tooltip text="Menu" delayDuration={175}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-light-300 bg-light-200 text-light-400 shadow transition-all duration-200 hover:scale-110 hover:shadow-md dark:border-dark-500 dark:bg-dark-700"
            >
              <MenuIcon
                size={18}
                className="dark:text-dark-100"
                stroke-width="1.8"
              />
            </button>
          </Tooltip>
        </li>
        {/* {!isHomePage && (
          <li>
            <motion.a
              href="/"
              initial={{ scale: 0.5, y: 0, opacity: 0 }}
              animate={shouldAnimate ? { scale: 1, x: 50, opacity: 1 } : {}}
              transition={{ duration: 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="absolute left-0 top-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-light-300 bg-light-200 text-light-400 shadow transition-all duration-200 hover:shadow-md dark:border-dark-500 dark:bg-dark-700"
            >
              <HomeIcon
                size={18}
                className="dark:text-dark-100"
                stroke-width="1.8"
              />
            </motion.a>
          </li>
        )} */}
      </ul>
      <CommandMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
