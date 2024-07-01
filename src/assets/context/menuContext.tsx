import { createContext, ReactNode, useState } from 'react';

interface MenuProps {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuContext = createContext({} as MenuProps);

interface MenuContextProviderProps {
  children: ReactNode;
}

export function MenuContextProvider({ children }: MenuContextProviderProps) {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <MenuContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
