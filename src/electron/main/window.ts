import { reader } from 'typescript-monads';
import { BrowserWindow } from 'electron';
import { IAppConfig } from '../config/config';

export const windowReader = reader<IAppConfig, BrowserWindow>(config => {
  // config.
  return new BrowserWindow();
});

