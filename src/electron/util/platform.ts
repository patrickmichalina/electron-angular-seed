import { platform } from 'os';

export enum PLATFORM {
  WINDOWS = 'win32',
  MAC = 'darwin',
  LINUX = 'linux',
  UNKNOWN = 'unknown'
}

export const CURRENT_PLATFORM =
  Object
    .keys(PLATFORM)
    .reduce((acc, key) => PLATFORM[key] === platform() ? PLATFORM[key] : acc, PLATFORM.UNKNOWN);

export const isPlatformMac = () => CURRENT_PLATFORM === PLATFORM.MAC;
export const isPlatformWindows = () => CURRENT_PLATFORM === PLATFORM.WINDOWS;
export const isPlatformLinux = () => CURRENT_PLATFORM === PLATFORM.LINUX;
