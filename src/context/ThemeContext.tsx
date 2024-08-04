import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { Theme } from '../typing/types.tsx';
import { IThemeContext } from '../typing/interfaces.tsx';
import { ThemeDict } from '../constants.ts';

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('dark');
  useEffect(() => {
    const HTML = document.documentElement;
    HTML.setAttribute('theme', theme);
  }, [theme]);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
