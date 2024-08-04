import { createContext, useState, ReactNode, useEffect, FC } from 'react';
import { IMenuContext } from '../typing/interfaces.tsx';

type ThemeProviderProps = {
  children: ReactNode;
};

export const MenuContext = createContext<IMenuContext | undefined>(undefined);

export const MenuProvider: FC<ThemeProviderProps> = (props) => {
  const { children } = props;
  const [menu, setMenu] = useState<boolean>(true);

  return (
    <MenuContext.Provider
      value={{
        menu,
        setMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
