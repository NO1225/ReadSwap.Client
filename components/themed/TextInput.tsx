import * as React from 'react';
import { StyleSheet, TextInput as DefaultTextInput } from 'react-native';
import { useThemeColor } from '../../hooks/useThemeColor';
import { FontSize } from '../../constants/FontSize';
import { TextInputProps } from '../../types/ui/props/TextInputProps';
import { View } from './View';

export function TextInput(props: TextInputProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
    const fontSize = FontSize.Regular;

    const styles = StyleSheet.create({
        inputContainer: {
            width: '100%',
            padding: 5,
            margin: 5,
            borderColor: useThemeColor({}, "tint"),
            borderWidth: 1,
        },
    })

    return (
        <View style={styles.inputContainer}>
            <DefaultTextInput style={[{ color, fontSize }, style]} {...otherProps} />
        </View>)

}
