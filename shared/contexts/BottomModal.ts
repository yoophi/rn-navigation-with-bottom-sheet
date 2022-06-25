import { createContext, useContext } from "react";

const BottomModalContext = createContext({
  bottomSheetRef: null,
  isBottomModalOpened: false,
  setIsBottomModalOpened: (flag: boolean) => {},
});

export const BottomModalProvider = BottomModalContext.Provider;

export const useBottomModal = () => useContext(BottomModalContext);
