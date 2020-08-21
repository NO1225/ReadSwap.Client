import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { View } from '../themed/View'
import { FontAwesome } from '@expo/vector-icons'
import { FontSize } from '../../constants/FontSize'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useThemeColor } from '../../hooks/useThemeColor'

export default function IconButton(props: { name: Icon, onClick: () => Promise<void>, locked?: boolean, willDie?: boolean }) {
    const [running, setRunning] = useState(false);

    const hundlePressing = async () => {
        if (props.locked != true) {
            await props.onClick();
            return;
        }
        setRunning(true);
        await props.onClick();

        if (props.willDie != true)
            setRunning(false);

    }

    return (
        <TouchableOpacity onPress={hundlePressing} disabled={running}>
            <View style={styles.container}>
                <FontAwesome size={FontSize.xxxLarge} color={running?useThemeColor({}, "accent2"):useThemeColor({}, "accent1")} {...props} />
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5
    }
})
