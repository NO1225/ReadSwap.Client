import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { View } from '../Themed'


export default function StagesLayout({ Stages, onFinish }: { Stages: Stage[], onFinish: () => void }) {
    const [currentStage, setCurrentStage] = useState<number>(0);

    const nextHundler = async () => {
        if (currentStage >= Stages.length - 1) {
            console.log("Out of index");
        }
        else {
            if (await Stages[currentStage].Verifyier()) {
                setCurrentStage(currentStage + 1);
            }
            else {

            }
        }
    }

    const backHundler = async () => {
        if (currentStage != 0)
            setCurrentStage(currentStage - 1);
    }


    const finishHundler = async () => {
        if (await Stages[currentStage].Submit()) {
            onFinish();
        }
        else {

        }
    }


    return (
        <View>
            {Stages[currentStage].Component(nextHundler, backHundler, finishHundler)}
        </View>
    )
}

const styles = StyleSheet.create({})
