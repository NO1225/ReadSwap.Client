import * as React from 'react';
import { Text as DefaultText } from 'react-native';
import { useThemeColor } from '../../hooks/useThemeColor';
import { FontSize } from '../../constants/FontSize';
import { TextProps } from '../../types/ui/props/TextProps';

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const fontSize = FontSize.Regular;

  return <DefaultText style={[{ color, fontSize }, style]} {...otherProps} />;
}
