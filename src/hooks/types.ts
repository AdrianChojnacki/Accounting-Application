export interface IGetSavedValueArguments {
  (key: string, initialValue: string | Function): string;
}

export interface IUseLocalStorageArguments {
  (key: string, initialValue: string | Function): [string, Function];
}
