import { createContext, useState } from "react";
import { IProviderProps } from ".";

const SpinnerContext = createContext(true);
const SpinnerSetFalseContext = createContext(() => {});
const SpinnerSetTrueContext = createContext(() => {});

const SpinnerProvider = ({ children }: IProviderProps) => {
  const [spinner, setSpinner] = useState<boolean>(true);

  const setSpinnerFalse = () => setSpinner(false);
  const setSpinnerTrue = () => setSpinner(true);

  return (
    <SpinnerContext.Provider value={spinner}>
      <SpinnerSetFalseContext.Provider value={setSpinnerFalse}>
        <SpinnerSetTrueContext.Provider value={setSpinnerTrue}>
          {children}
        </SpinnerSetTrueContext.Provider>
      </SpinnerSetFalseContext.Provider>
    </SpinnerContext.Provider>
  );
};

export {
  SpinnerProvider,
  SpinnerContext,
  SpinnerSetFalseContext,
  SpinnerSetTrueContext,
};
