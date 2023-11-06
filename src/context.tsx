import { createContext, useContext, useState, useMemo, ReactNode } from 'react';

type MyContextValue = {
  renderedComp: boolean;
  setRenderedComp: React.Dispatch<React.SetStateAction<boolean>>;
};

const MyContext = createContext<MyContextValue | undefined>(undefined);

type MyContextProviderProps = {
  children: ReactNode;
};

export function MyContextProvider({ children }: MyContextProviderProps) {
  const [renderedComp, setRenderedComp] = useState(false);

  const contextValue = useMemo(() => ({ renderedComp, setRenderedComp }), [renderedComp, setRenderedComp]);

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
}

export function useMyContext() {
  const context = useContext(MyContext);

  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }

  return context;
}
