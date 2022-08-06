import { createContext, useState } from "react";
import { IProviderProps } from ".";

const PopupContext = createContext(true);
const PopupShowContext = createContext(() => {});
const PopupHideContext = createContext(() => {});

const PopupProvider = ({ children }: IProviderProps) => {
  const [popupState, setPopupState] = useState<boolean>(false);

  const showPopup = () => setPopupState(true);
  const hidePopup = () => setPopupState(false);

  return (
    <PopupContext.Provider value={popupState}>
      <PopupShowContext.Provider value={showPopup}>
        <PopupHideContext.Provider value={hidePopup}>
          {children}
        </PopupHideContext.Provider>
      </PopupShowContext.Provider>
    </PopupContext.Provider>
  );
};

export { PopupProvider, PopupContext, PopupShowContext, PopupHideContext };
