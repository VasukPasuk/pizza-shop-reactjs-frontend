// import { createContext, useState, ReactNode, FC } from 'react';
//
// type ThemeProviderProps = {
//   children: ReactNode;
// };
//
// export const MenuContext = createContext< | undefined>(undefined);
//
// export const MenuProvider: FC<ThemeProviderProps> = (props) => {
//   const { children } = props;
//   const [menu, setMenu] = useState<boolean>(true);
//
//   return (
//     <MenuContext.Provider
//       value={{
//         menu,
//         setMenu,
//       }}
//     >
//       {children}
//     </MenuContext.Provider>
//   );
// };
