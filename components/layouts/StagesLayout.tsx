import React, { useState, useRef } from 'react'
import { Animated, StyleSheet } from 'react-native'
import { View } from "../themed/View";
import Layout from '../../constants/Layout';
import { slideOutToLeft, translate, slideIn, slideOutToRight } from '../../animations/SlidingAnimations';

export default function StagesLayout({ Stages, onFinish }: { Stages: Stage[], onFinish: () => void }) {
    const [currentStage, setCurrentStage] = useState<number>(0);

    const translateX = useRef(new Animated.Value(0)).current;

    const nextHundler = async () => {
        if (currentStage >= Stages.length - 1) {
            console.log("Out of index");
        }
        else {
            if (await Stages[currentStage].Verifyier()) {

                slideOutToLeft(translateX,
                    () => {
                        translate(translateX, Layout.window.width, () => {
                            setCurrentStage(currentStage + 1);
                            slideIn(translateX, 0);
                        })
                    }
                )

            }
            else {

            }
        }
    }

    const backHundler = async () => {
        if (currentStage != 0) {
            slideOutToRight(
                translateX,
                () => {
                    translate(translateX, -Layout.window.width, () => {
                        setCurrentStage(currentStage - 1);
                        slideIn(translateX, 0);
                    })
                }
            )
        }
    }


    const finishHundler = async () => {
        if (await Stages[currentStage].Verifyier()) {
            if (await Stages[currentStage].Submit()) {
                onFinish();
            }
            else {

            }
        }

    }


    return (
        <View style={styles.container}>
            <Animated.View style={[
                styles.container,
                {
                    transform: [
                        {
                            translateX
                        }
                    ]
                }

            ]}>
                {Stages[currentStage].Component(nextHundler, backHundler, finishHundler)}
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    }
})
