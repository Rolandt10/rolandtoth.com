import { Command } from "cmdk";
import { useEffect, useState } from "react";
import {
  ApertureIcon,
  ArrowRightIcon,
  BookIcon,
  EmailIcon,
  HomeIcon,
  SearchIcon,
  TwitterIcon,
} from "../Icons/Icons";
import { AnimatePresence, motion } from "framer-motion";

const CommandMenu = ({ isOpen, setIsOpen }) => {
  const [query, setQuery] = useState("");

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
    { name: "Snapshots", icon: <ApertureIcon size={16} />, href: "snapshots" },
    { name: "Home", icon: <HomeIcon size={16} />, href: "#" },
    { name: "Posts", icon: <BookIcon size={16} />, href: "posts" },
  ].filter((item) => filterItem(item.name));

  const contactItems = [
    {
      name: "Twitter / X",
      icon: <TwitterIcon size={16} />,
      href: "https://x.com/rlndtth",
    },
    {
      name: "E-mail",
      icon: <EmailIcon size={16} />,
      href: "mailto:hi@rolandtoth.com",
    },
  ].filter((item) => filterItem(item.name));

  return (
    <AnimatePresence>
      {isOpen && (
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

          <motion.div
            layout
            transition={{
              layout: {
                duration: 0.2,
                ease: "easeOut",
              },
            }}
          >
            <Command.List>
              <Command.Empty>No results found.</Command.Empty>

              {browseItems.length > 0 && (
                <Command.Group heading="Browse">
                  {browseItems.map((item) => (
                    <Command.Item key={item.name}>
                      <a
                        href={item.href}
                        className="group flex justify-between"
                      >
                        <div className="flex items-center gap-3">
                          {item.icon}
                          {item.name}
                        </div>
                        <div className="hidden group-hover:block">
                          <ArrowRightIcon size={16} />
                        </div>
                      </a>
                    </Command.Item>
                  ))}
                </Command.Group>
              )}

              {contactItems.length > 0 && (
                <Command.Group heading="Contact">
                  {contactItems.map((item) => (
                    <Command.Item key={item.name}>
                      <a
                        href={item.href}
                        className="group flex justify-between"
                      >
                        <div className="flex items-center gap-3">
                          {item.icon}
                          {item.name}
                        </div>
                        <div className="hidden group-hover:block">
                          <ArrowRightIcon size={16} />
                        </div>
                      </a>
                    </Command.Item>
                  ))}
                </Command.Group>
              )}
            </Command.List>
          </motion.div>
        </Command.Dialog>
      )}
    </AnimatePresence>
  );
};

export default CommandMenu;
