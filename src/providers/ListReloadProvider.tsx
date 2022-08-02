import { createContext, useState } from "react";
import { IProviderProps } from ".";

const ListReloadContext = createContext(true);
const ListReloadSetFalseContext = createContext(() => {});
const ListReloadSetTrueContext = createContext(() => {});

const ListReloadProvider = ({ children }: IProviderProps) => {
  const [reload, setReload] = useState<boolean>(true);

  const setReloadFalse = () => setReload(false);
  const setReloadTrue = () => setReload(true);

  return (
    <ListReloadContext.Provider value={reload}>
      <ListReloadSetFalseContext.Provider value={setReloadFalse}>
        <ListReloadSetTrueContext.Provider value={setReloadTrue}>
          {children}
        </ListReloadSetTrueContext.Provider>
      </ListReloadSetFalseContext.Provider>
    </ListReloadContext.Provider>
  );
};

export {
  ListReloadProvider,
  ListReloadContext,
  ListReloadSetFalseContext,
  ListReloadSetTrueContext,
};
