import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function TestComponent({firstName, lastName}:{firstName:string,lastName:string|number}) {
    return (
        <View>
            <Text>{firstName} {lastName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
