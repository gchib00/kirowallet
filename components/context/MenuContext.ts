import React, { createContext } from 'react';

interface MenuContextType {
  menuActive: boolean;
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuContext = createContext<MenuContextType>({
  menuActive: false,
  setMenuActive: () => null,
});

export default MenuContext;