import { reader } from 'typescript-monads';
import { IAppConfig } from '../config/config';

export const doTheThing = reader<IAppConfig, string>(config => {
  // config.
  return '';
});

