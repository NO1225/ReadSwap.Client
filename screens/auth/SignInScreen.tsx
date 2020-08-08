import React, { useContext } from 'react'
import { StyleSheet, Button} from 'react-native'
import { View, Text } from '../../components/Themed'
import { ScreenContext } from '../../contexts/ScreenContext';
import { useLocale } from '../../hooks/useLocale';

export default function SignInScreen() {

    const screenContext = useContext(ScreenContext);

    const signIn = ()=>{
        if(screenContext.setCurrentScreen!=undefined)
        {   
            screenContext.setCurrentScreen("Main");
        }
    }

    return (
        <View>
            <Text>{useLocale({},"greeting")}</Text>
            <Button title="sign in" onPress={signIn}/>
        </View>
    )
}

const styles = StyleSheet.create({})
