import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from './themed/View'
import IconButton from './customComponent/IconButton'

export default function SettingsIcon({onClick}: { onClick:()=>void }) {
    return (
        <View style={styles.buttonContainer}>
            <IconButton name="gear" onClick={async () => onClick()} />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginHorizontal: 10
    }
})
