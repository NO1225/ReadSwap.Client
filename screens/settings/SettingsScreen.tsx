import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from "../../components/themed/View"
import { Text } from "../../components/themed/Text"
import IconButton from '../../components/customComponent/IconButton'
import { signOut } from '../../services/navigation/signOut'

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text>SettingsScreen</Text>
            <IconButton name="sign-out" onClick={async ()=>{
                console.log("signing out");
                signOut();
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
