import * as React from 'react';

import { TextProps } from './themed/Themed';
import { Text } from "./themed/Text";

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}
