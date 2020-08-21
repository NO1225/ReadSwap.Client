import * as React from 'react';
import useDeviceLocale from './useDeviceLocale';
import LocalErrorMessages from '../constants/LocalErrorMessages';


export function useLocalErrorMessage(
  props: { en?: string; ar?: string },
  stringName: keyof typeof LocalErrorMessages.en & keyof typeof LocalErrorMessages.ar
) {
  const locale = useDeviceLocale();
  const stringFromLocale = props[locale];

  if (stringFromLocale) {
    return stringFromLocale;
  } else {
    return LocalErrorMessages[locale][stringName];
  }
}