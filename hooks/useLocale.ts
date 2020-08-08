import * as React from 'react';
import Locale from '../constants/Locale';
import useDeviceLocale from './useDeviceLocale';


export function useLocale(
  props: { en?: string; ar?: string },
  stringName: keyof typeof Locale.en & keyof typeof Locale.ar
) {
  const locale = useDeviceLocale();
  const stringFromLocale = props[locale];

  if (stringFromLocale) {
    return stringFromLocale;
  } else {
    return Locale[locale][stringName];
  }
}