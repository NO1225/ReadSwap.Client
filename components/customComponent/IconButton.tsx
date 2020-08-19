import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from '../themed/View'
import { FontAwesome } from '@expo/vector-icons'
import { FontSize } from '../../constants/FontSize'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useThemeColor } from '../../hooks/useThemeColor'

export default function IconButton(props: { name: Icon, onPress: ()=>void }) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.container}>
                <FontAwesome size={FontSize.xxxLarge} color={useThemeColor({},"accent1")} {...props} />
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container:{
        margin:5
    }
})
