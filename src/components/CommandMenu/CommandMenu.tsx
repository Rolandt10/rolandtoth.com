import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { SearchIcon } from "../Icons/Icons";
import { CommandMenuContext } from "../../contexts/CommandMenuContext";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const CommandMenu = ({ isOpen, setIsOpen, children }: Props) => {
  const [query, setQuery] = useState<string>("");

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
          <CommandMenuContext.Provider value={{ query, filterItem }}>
            {children}
          </CommandMenuContext.Provider>
        </Command.List>
      </Command.Dialog>
    )
  );
};

export default CommandMenu;
