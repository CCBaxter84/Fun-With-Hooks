import { FormEvent } from 'react';

export interface IHandlerFunction {
  (event: FormEvent<HTMLFormElement>|FormEvent<HTMLInputElement>): void
}