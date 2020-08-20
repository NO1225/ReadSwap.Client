import { Animated } from "react-native";
import Layout from "../constants/Layout";
import { useLocale } from "../hooks/useLocale";

const slidingTime = 200;

export const slideOutToLeft = (translateX: Animated.Value, onFinnish?: () => void) => {
    let corrector = 1;
    if (useLocale({}, "direction") == "rtl") {
        corrector = -1;
    }

    Animated.timing(translateX, {
        toValue: -Layout.window.width * corrector,
        duration: slidingTime,
        useNativeDriver: true,

    }).start((even) => {
        if (even.finished == true) {
            if (onFinnish)
                onFinnish()
        }
    })
}

export const slideOutToRight = (translateX: Animated.Value, onFinnish?: () => void) => {
    let corrector = 1;
    if (useLocale({}, "direction") == "rtl") {
        corrector = -1;
    }
    Animated.timing(translateX, {
        toValue: Layout.window.width * corrector,
        duration: slidingTime,
        useNativeDriver: true,

    }).start((even) => {
        if (even.finished == true) {
            if (onFinnish)
                onFinnish()
        }
    })
}

export const slideIn = (translateX: Animated.Value, slideToPosition: number, onFinnish?: () => void) => {
    let corrector = 1;
    if (useLocale({}, "direction") == "rtl") {
        corrector = -1;
    }
    Animated.timing(translateX, {
        toValue: slideToPosition * corrector,
        duration: slidingTime,
        useNativeDriver: true,

    }).start((even) => {
        if (even.finished == true) {
            if (onFinnish)
                onFinnish()
        }
    })
}

export const translate = (translateX: Animated.Value, position: number, onFinnish?: () => void) => {
    let corrector = 1;
    if (useLocale({}, "direction") == "rtl") {
        corrector = -1;
    }
    Animated.timing(translateX, {
        toValue: position * corrector,
        duration: 1,
        useNativeDriver: true,

    }).start((even) => {
        if (even.finished == true) {
            if (onFinnish)
                onFinnish()
        }
    })
}
