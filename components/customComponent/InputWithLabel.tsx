import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from '../themed/View'
import { Text } from '../themed/Text'
import { FontSize } from '../../constants/FontSize'
import { useThemeColor } from '../../hooks/useThemeColor'
import { TextInput } from '../themed/TextInput'

export default function InputWithLabel(
    {label,errorMessage,placeholder,value,setValue,secureTextEntry,numbersOnly}:
    {
        label:string,
        errorMessage:string,
        placeholder?:string,
        value:string,
        setValue:(value:string)=>void,
        secureTextEntry?:boolean,
        numbersOnly?:boolean
    }) {
    const styles = StyleSheet.create({
        inputComponentContainer: {
            width: '80%',
        },
        titleText: {
            fontSize: FontSize.Large
        },
        errorText :{
            fontSize: FontSize.Small,
            color: useThemeColor({},"error")
        },
    })

    return (
        <View style={styles.inputComponentContainer}>
            <Text>{label}</Text>
            {errorMessage.length > 0 ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
            <TextInput keyboardType={numbersOnly?"numeric":"ascii-capable"} secureTextEntry={secureTextEntry} placeholder={placeholder} value={value} onChangeText={setValue} />
        </View>
    )
}


