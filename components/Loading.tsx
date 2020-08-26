import React, { useEffect, useRef } from 'react'
import { StyleSheet, Animated } from 'react-native'
import { View } from './themed/View'
import { Text } from './themed/Text'
import Icon from './Icon'
import { useThemeColor } from '../hooks/useThemeColor'
import { clockWiseSpinningAnimationLoop } from '../animations/SpinningAnimations'

export default function Loading({ onStart, onFinish }:
    {
        onStart: () => Promise<boolean>,
        onFinish: (success: boolean) => Promise<void>,
    }) {

    const rotate = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        async function doFunction() {
            clockWiseSpinningAnimationLoop(rotate);
            let success = await onStart();
            await onFinish(success);
        }

        doFunction();
        return () => {
        }
    }, [])

    return (
        <View style={styles.container}>
            <Animated.View style={{
                    transform: [
                        {
                            rotate
                        }
                    ]
                }}>
                <Icon name="spinner" color={useThemeColor({}, "accent1")} />

            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})
