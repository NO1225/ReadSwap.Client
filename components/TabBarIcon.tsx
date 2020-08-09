import React from 'react'
import { StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { FontSize } from '../constants/FontSize'

export default function TabBarIcon(props: { name: Icon; color: string }) {
    return (
        <FontAwesome size={FontSize.xxxxxLarge} style={{ marginBottom: -3 }} {...props} />
    )
}

const styles = StyleSheet.create({})
