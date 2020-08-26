import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from './Text'
import { FontSize } from '../../constants/FontSize'
import { useThemeColor } from '../../hooks/useThemeColor';
export default function TextButton({ text, onClick, locked, willDie }:
    {
        text: string,
        onClick: () => Promise<void>,
        locked?: boolean,
        willDie?: boolean
    }) {


    const styles = StyleSheet.create({
        container: {
            margin: 10,
            borderBottomColor: useThemeColor({}, "tint"),
            borderBottomWidth: 1,

        },
        titleText: {
            fontSize: FontSize.Large
        },
    })

    const [running, setRunning] = useState(false);

    const hundlePressing = async () => {
        if (locked != true) {
            await onClick();
            return;
        }
        setRunning(true);
        await onClick();

        if (willDie != true)
            setRunning(false);

    }


    return (
        <TouchableOpacity style={styles.container} onPress={hundlePressing}>
            <Text style={styles.titleText}>{text}</Text>
        </TouchableOpacity>
    )
}
