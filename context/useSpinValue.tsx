import { createContext, useContext, useState } from "react";

type valueContextType = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const HashContext = createContext<valueContextType>({
  value: '',
  setValue: () => {}
});

type Props = {
  children: React.ReactNode;
}

export function ValueProvider({children}:Props){
  const [value, setValue] = useState('')
  return (
    <>
      <HashContext.Provider value={{value, setValue}}>
        {children}
      </HashContext.Provider>
    </>
  )
}

export function useHash() {
  return useContext(HashContext);
}
