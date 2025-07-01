import { useEffect, useState } from "react";
import CommandMenu from "../CommandMenu/CommandMenu";
import {
  ApertureIcon,
  BookIcon,
  EmailIcon,
  HomeIcon,
  MenuIcon,
  TwitterIcon,
} from "../Icons/Icons";
import Tooltip from "../Tooltip/Tooltip";
import { motion } from "framer-motion";
import CommandGroup from "../CommandGroup/CommandGroup";
import type { CommandItems } from "../../types/CommandItem";

const browseItems: CommandItems[] = [
  {
    name: "Snapshots",
    slug: "snapshots",
    icon: <ApertureIcon size={16} />,
    href: "/snapshots",
  },
  { name: "Home", slug: "home", icon: <HomeIcon size={16} />, href: "/" },
  {
    name: "Posts",
    slug: "posts",
    icon: <BookIcon size={16} />,
    href: "/posts",
  },
];

const contactItems: CommandItems[] = [
  {
    name: "Twitter / X",
    slug: "twitter",
    icon: <TwitterIcon size={15} strokeWidth="0.1" />,
    href: "https://x.com/rlndtth",
  },
  {
    name: "E-mail",
    slug: "email",
    icon: <EmailIcon size={16} />,
    href: "mailto:hi@rolandtoth.com",
  },
];

const Header = ({ currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [renderHomeButton, setRenderHomeButton] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const isHomePage = currentPath === "/";

  useEffect(() => {
    const previousPath = sessionStorage.getItem("previousPath");

    const comingFromHome = previousPath === "/" && !isHomePage;
    const stayingOnPage = currentPath !== previousPath;

    if (comingFromHome) {
      setShouldAnimate(true);
      // Delay render by one frame so animation can apply on mount
      requestAnimationFrame(() => {
        setRenderHomeButton(true);
      });
    } else if (!isHomePage) {
      // No animation, show instantly
      setShouldAnimate(false);
      setRenderHomeButton(true);
    } else {
      // On home page: hide
      setShouldAnimate(false);
      setRenderHomeButton(false);
    }

    if (stayingOnPage) {
      sessionStorage.setItem("previousPath", currentPath);
    }
  }, [currentPath, isHomePage]);

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

        {renderHomeButton && (
          <li>
            <Tooltip text="Home" delayDuration={175}>
              {shouldAnimate ? (
                <motion.a
                  href="/"
                  key="home-button-animate"
                  initial={{ scale: 0.5, y: 0, opacity: 0 }}
                  animate={{ scale: 1, x: 50, opacity: 1 }}
                  transition={{ duration: 0.15 }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute left-0 top-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-light-300 bg-light-200 text-light-400 shadow transition-all duration-200 hover:shadow-md dark:border-dark-500 dark:bg-dark-700"
                >
                  <HomeIcon
                    size={18}
                    className="dark:text-dark-100"
                    stroke-width="1.8"
                  />
                </motion.a>
              ) : (
                <a
                  href="/"
                  className="absolute left-0 top-0 flex h-10 w-10 translate-x-[50px] cursor-pointer items-center justify-center rounded-lg border border-light-300 bg-light-200 text-light-400 shadow transition-all duration-200 hover:shadow-md dark:border-dark-500 dark:bg-dark-700"
                >
                  <HomeIcon
                    size={18}
                    className="dark:text-dark-100"
                    stroke-width="1.8"
                  />
                </a>
              )}
            </Tooltip>
          </li>
        )}
      </ul>

      <CommandMenu isOpen={isOpen} setIsOpen={setIsOpen}>
        <CommandGroup
          heading="Browse"
          commandItems={browseItems}
          hoveredItem={hoveredItem}
          setHoveredItem={setHoveredItem}
        />

        <CommandGroup
          heading="Contact"
          commandItems={contactItems}
          hoveredItem={hoveredItem}
          setHoveredItem={setHoveredItem}
        />
      </CommandMenu>
    </header>
  );
};

export default Header;
