import { createContext, ReactNode, useContext, useState } from "react";
import { AppContextType } from "../types/context";

const AppContext = createContext<AppContextType>({
  counter: 0,
  setCounter: () => {},
});

const AppProvider = ({ children }: {children: ReactNode}) => {
  const [counter, setCounter] = useState(0);

  return (
    <AppContext.Provider
      value={{
        counter,
        setCounter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => useContext(AppContext);
