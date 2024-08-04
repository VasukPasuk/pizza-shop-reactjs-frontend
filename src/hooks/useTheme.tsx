import { ThemeContext } from '../context/ThemeContext.tsx';
import { useContext } from 'react';
import { IThemeContext } from '../typing/interfaces.tsx';

export const useTheme = (): IThemeContext => {
  const { setTheme, theme } = useContext(ThemeContext);
  return {
    theme,
    setTheme,
  };
};
