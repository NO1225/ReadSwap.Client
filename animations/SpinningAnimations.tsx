import { Animated, Easing } from "react-native";


const spinningTime = 1000;

export const clockWiseSpinningAnimationLoop = (rotate: Animated.Value) => {

    Animated.loop(
        Animated.timing(rotate, {
            toValue: 44/7,
            duration: spinningTime,
            easing: Easing.linear,
            useNativeDriver: true,
        })
    ).start()
}

export const counterClockWiseSpinningAnimationLoop = (rotate: Animated.Value) => {

    Animated.loop(
        Animated.timing(rotate, {
            toValue: -44/7,
            duration: spinningTime,
            easing: Easing.linear,
            useNativeDriver: true,
        })
    ).start()
}
