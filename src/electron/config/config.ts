import { BrowserWindowConstructorOptions } from 'electron';
import { isPlatformMac, isPlatformWindows, isPlatformLinux } from '../util/platform';

export interface IAppConfig {
  readonly isDebug: boolean;
  readonly isPlatformMac: boolean;
  readonly isPlatformWindows: boolean;
  readonly isPlatforLinux: boolean;
  // readonly browserWindow: BrowserWindowConstructorOptions;
}


export const DEFAULT_CONFIG: IAppConfig = {
  isDebug: !process.mainModule.filename.includes('app.asar'),
  isPlatforLinux: isPlatformLinux(),
  isPlatformMac: isPlatformMac(),
  isPlatformWindows: isPlatformWindows()
};
