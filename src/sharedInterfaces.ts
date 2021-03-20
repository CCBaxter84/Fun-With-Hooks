import { FormEvent, FC } from 'react';

export interface IHandlerFunction {
  (event: FormEvent<HTMLFormElement>|FormEvent<HTMLInputElement>): void
}

export interface IForm {
  name: string,
  component: FC
}