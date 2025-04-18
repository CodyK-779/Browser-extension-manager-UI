import { createContext, ReactNode, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

interface GlobalContextValue {
  darktheme: boolean;
  setDarkTheme: (darktheme: boolean) => void;
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
  activeFilter: string;
  setActiveFilter: (activeFilter: string) => void;
}

const GlobalContext = createContext<GlobalContextValue | undefined>(undefined);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
};

const GlobalContextProvider = ({ children }: Props) => {
  const [darktheme, setDarkTheme] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <GlobalContext.Provider
      value={{
        darktheme,
        setDarkTheme,
        isActive,
        setIsActive,
        activeFilter,
        setActiveFilter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
