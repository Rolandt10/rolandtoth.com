import { createContext, useContext } from "react";

export const CommandMenuContext = createContext<{
  query: string;
  filterItem: (text: string) => boolean;
}>({ query: "", filterItem: () => true });

export const useCommandMenu = () => useContext(CommandMenuContext);
