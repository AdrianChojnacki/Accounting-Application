import { useState, useEffect } from "react";
import { IGetSavedValueArguments, IUseLocalStorageArguments } from "./types";

const getSavedValue: IGetSavedValueArguments = (key, initialValue) => {
  const savedValue = JSON.parse(localStorage.getItem(key) || "{}");

  if (savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue();

  return initialValue;
};

const useLocalStorage: IUseLocalStorageArguments = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export { useLocalStorage };
