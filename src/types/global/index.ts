export type TAppState<T> = T & {
  index: string;
};

export type TTableType<T> = T & {
  action?: any;
};
