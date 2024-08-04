import { MenuContext } from '../context/MenuContext.tsx';
import { useContext } from 'react';
import { IMenuContext } from '../typing/interfaces.tsx';

export const useMenu = (): IMenuContext => {
  const { menu, setMenu } = useContext(MenuContext);
  return {
    menu,
    setMenu,
  };
};
