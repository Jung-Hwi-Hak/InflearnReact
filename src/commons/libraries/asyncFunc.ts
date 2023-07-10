import type { FormEvent } from "react";

export const wrapAsyncFunc = (asyncFunc: () => Promise<void>) => (): void => {
  void asyncFunc();
};

// Form 전용
export const wrapFormAsyncFunc =
  (asyncFunc: () => Promise<void>) =>
  (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    void asyncFunc();
  };
