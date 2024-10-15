import { Command } from "cmdk";
import { useEffect } from "react";
import {
  ApertureIcon,
  ArrowRightIcon,
  BookIcon,
  EmailIcon,
  HomeIcon,
  SearchIcon,
  TwitterIcon,
} from "../Icons";

const CommandMenu = ({ isOpen, setIsOpen }) => {
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

  return (
    <Command.Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
      label="Global Command Menu"
    >
      <div className="-mx-5 flex items-center gap-4 border-b border-light-400/25 px-5 pb-4 dark:border-dark-400/45">
        <SearchIcon size={20} className="dark:text-dark-200" />
        <Command.Input placeholder="Go to..." />
      </div>
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading="Browse">
          <Command.Item>
            <a href="#" className="group flex justify-between">
              <div className="flex items-center gap-3">
                <ApertureIcon size={16} />
                Snapshots
              </div>
              <div className="hidden group-hover:block">
                <ArrowRightIcon size={16} />
              </div>
            </a>
          </Command.Item>
          <Command.Item>
            <a href="#" className="group flex justify-between">
              <div className="flex items-center gap-3">
                <HomeIcon size={16} />
                Home
              </div>
              <div className="hidden group-hover:block">
                <ArrowRightIcon size={16} />
              </div>
            </a>
          </Command.Item>
          <Command.Item>
            <a href="blog" className="group flex justify-between">
              <div className="flex items-center gap-3">
                <BookIcon size={16} />
                Blog
              </div>
              <div className="hidden group-hover:block">
                <ArrowRightIcon size={16} />
              </div>
            </a>
          </Command.Item>
        </Command.Group>
        <Command.Group heading="Contact">
          <Command.Item>
            <a href="#" className="group flex justify-between">
              <div className="flex items-center gap-3">
                <TwitterIcon size={16} />
                Twitter / X
              </div>
              <div className="hidden group-hover:block">
                <ArrowRightIcon size={16} />
              </div>
            </a>
          </Command.Item>
          <Command.Item>
            <a href="#" className="group flex justify-between">
              <div className="flex items-center gap-3">
                <EmailIcon size={16} />
                E-mail
              </div>
              <div className="hidden group-hover:block">
                <ArrowRightIcon size={16} />
              </div>
            </a>
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
};

export default CommandMenu;
