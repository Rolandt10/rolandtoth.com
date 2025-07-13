import { Command } from "cmdk";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "../Icons/Icons";
import { useCommandMenu } from "../../contexts/CommandMenuContext";
import type { CommandItems } from "../../types/CommandItem";

interface Props {
  heading: string;
  commandItems: CommandItems[];
  hoveredItem: any;
  setHoveredItem: any;
}

const SPRING = {
  type: "spring",
  stiffness: 650,
  damping: 50,
};

export default function CommandGroup({
  heading,
  commandItems,
  hoveredItem,
  setHoveredItem,
}: Props) {
  const { filterItem } = useCommandMenu();
  const filteredItems = commandItems.filter((item) => filterItem(item.name));

  if (commandItems.length === 0) return null;

  return (
    <Command.Group heading={heading}>
      {filteredItems.map(({ name, slug, icon, href }) => (
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
              className="absolute -inset-x-3 -inset-y-px dark:bg-dark-500"
              layoutId="hovered-backdrop"
              transition={SPRING}
              initial={{ borderRadius: 8 }}
            >
              <div className="group absolute right-3 top-1/2 -translate-y-1/2">
                <ArrowRightIcon size={16} />
              </div>
            </motion.div>
          )}

          <a
            href={href}
            className="relative flex justify-between"
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
  );
}
