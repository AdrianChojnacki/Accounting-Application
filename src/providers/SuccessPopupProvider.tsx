import { createContext, useState } from "react";
import { IProviderProps } from ".";

const SuccessPopupContext = createContext(true);
const SuccessPopupShowContext = createContext(() => {});
const SuccessPopupHideContext = createContext(() => {});

const SuccessPopupProvider = ({ children }: IProviderProps) => {
  const [popupState, setPopupState] = useState<boolean>(false);

  const showSuccessPopup = () => setPopupState(true);
  const hideSuccessPopup = () => setPopupState(false);

  return (
    <SuccessPopupContext.Provider value={popupState}>
      <SuccessPopupShowContext.Provider value={showSuccessPopup}>
        <SuccessPopupHideContext.Provider value={hideSuccessPopup}>
          {children}
        </SuccessPopupHideContext.Provider>
      </SuccessPopupShowContext.Provider>
    </SuccessPopupContext.Provider>
  );
};

export {
  SuccessPopupProvider,
  SuccessPopupContext,
  SuccessPopupShowContext,
  SuccessPopupHideContext,
};
