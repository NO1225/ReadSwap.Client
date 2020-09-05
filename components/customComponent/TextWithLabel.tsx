import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from '../themed/View'
import { Text } from '../themed/Text'
import { FontSize } from '../../constants/FontSize'

export default function TextWithLabel(
    { label, value }:
        {
            label: string,
            value: string,
        }) {
    const styles = StyleSheet.create({
        container: {
            paddingTop: 35,
            alignItems: "center",
        },

        titleText: {
            fontSize: FontSize.Large
        },
        
        margin2: {
            margin: 8
        },

        center: {
            width: '100%',
            alignItems: "center",
            justifyContent: "center"
        },
        flex1: {
            flex: 1
        },
        rowFlex: {
            flexDirection: "row"
        },
        spaceBetween: {
            justifyContent: "space-between"
        },
        fullWidth: {
            width: '100%'
        },
        alignItemsCenter:{
            alignItems:"center"
        }
    })

    return (
        <View style={[styles.rowFlex, styles.spaceBetween,styles.alignItemsCenter]}>
            <View style={[styles.flex1, styles.margin2]}>
                <Text style={styles.titleText}>{label}</Text>
            </View>
            <View style={[styles.flex1, styles.margin2]}>
                <Text>{value}</Text>
            </View>
        </View>
    )
}


