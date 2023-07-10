export const wrapAsyncFunc = (asyncFunc: () => Promise<void>) => (): void => {
  void asyncFunc();
};
