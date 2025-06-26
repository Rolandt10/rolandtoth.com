import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  ApertureIcon,
  ArrowRightIcon,
  BookIcon,
  EmailIcon,
  HomeIcon,
  SearchIcon,
  TwitterIcon,
} from "../Icons/Icons";

const CommandMenu = ({ isOpen, setIsOpen }) => {
  const [query, setQuery] = useState("");
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Reset query when dialog closes
  useEffect(() => {
    if (!isOpen) {
      setQuery("");
    }
  }, [isOpen]);

  // Filter items based on query
  const filterItem = (text) => {
    if (query === "") return true;
    return text.toLowerCase().includes(query.toLowerCase());
  };

  const browseItems = [
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
  ].filter((item) => filterItem(item.name));

  const contactItems = [
    {
      name: "Twitter / X",
      slug: "twitter",
      icon: <TwitterIcon size={15} stroke-width="0.1" />,
      href: "https://x.com/rlndtth",
    },
    {
      name: "E-mail",
      slug: "email",
      icon: <EmailIcon size={16} />,
      href: "mailto:hi@rolandtoth.com",
    },
  ].filter((item) => filterItem(item.name));

  const SPRING = {
    type: "spring",
    stiffness: 300,
    damping: 30,
  };

  return (
    isOpen && (
      <Command.Dialog
        open={isOpen}
        onOpenChange={setIsOpen}
        label="Global Command Menu"
      >
        <div className="-mx-5 flex items-center gap-4 border-b border-light-400/25 px-5 pb-4 dark:border-dark-400/45">
          <SearchIcon size={20} className="dark:text-dark-200" />
          <Command.Input
            placeholder="Go to..."
            value={query}
            onValueChange={setQuery}
          />
        </div>

        <Command.List>
          <Command.Empty className="pt-2 text-sm">
            This doesn't exist yet. Maybe next time.{" "}
            <span className="text-lg">😔</span>
          </Command.Empty>

          {browseItems.length > 0 && (
            <Command.Group heading="Browse">
              {browseItems.map(({ name, slug, icon, href }) => (
                <Command.Item
                  key={slug}
                  className="relative"
                  style={{
                    zIndex: hoveredItem === slug ? 1 : 2,
                  }}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {hoveredItem === slug && (
                    <motion.div
                      className="absolute -inset-x-3 inset-y-0 dark:bg-dark-500"
                      layoutId="hovered-backdrop"
                      transition={SPRING}
                      initial={{
                        borderRadius: 8,
                      }}
                    >
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <ArrowRightIcon size={16} />
                      </div>
                    </motion.div>
                  )}

                  <a
                    href={href}
                    className="group relative flex justify-between"
                    onMouseEnter={() => setHoveredItem(slug)}
                  >
                    <div className="flex items-center gap-3">
                      {icon}
                      <span className="transition-all delay-75 dark:group-hover:text-dark-100">
                        {name}
                      </span>
                    </div>
                  </a>
                </Command.Item>
              ))}
            </Command.Group>
          )}

          {contactItems.length > 0 && (
            <Command.Group heading="Contact">
              {contactItems.map(({ name, slug, icon, href }) => (
                <Command.Item
                  key={slug}
                  className="relative"
                  style={{
                    zIndex: hoveredItem === slug ? 1 : 2,
                  }}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {hoveredItem === slug && (
                    <motion.div
                      className="absolute -inset-x-3 inset-y-0 dark:bg-dark-500"
                      layoutId="hovered-backdrop"
                      initial={{
                        borderRadius: 8,
                      }}
                      transition={SPRING}
                    >
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <ArrowRightIcon size={16} />
                      </div>
                    </motion.div>
                  )}

                  <a
                    href={href}
                    className="group relative flex justify-between"
                    onMouseEnter={() => setHoveredItem(slug)}
                  >
                    <div className="flex items-center gap-3">
                      {icon}
                      <span className="transition-all delay-75 dark:group-hover:text-dark-100">
                        {name}
                      </span>
                    </div>
                  </a>
                </Command.Item>
              ))}
            </Command.Group>
          )}
        </Command.List>
      </Command.Dialog>
    )
  );
};

export default CommandMenu;
