import React, { useContext } from 'react'
import { StyleSheet, Button} from 'react-native'
import { View } from "../../components/themed/View";
import { Text } from "../../components/themed/Text";
import { ScreenContext } from '../../contexts/ScreenContext';
import { useLocale } from '../../hooks/useLocale';
import { StackNavigationProp } from '@react-navigation/stack';

export default function SignInScreen({navigation}:{navigation:StackNavigationProp<AuthNavigationParamList,"SignInScreen">}) {

    const screenContext = useContext(ScreenContext);

    const signIn = ()=>{
        if(screenContext.setCurrentScreen!=undefined)
        {   
            screenContext.setCurrentScreen("Main");
        }
    }

    const goToSignUp = ()=>{
        navigation.navigate("SignUpScreen");
    }

    return (
        <View>
            <Text>{useLocale({},"greeting")}</Text>
            <Button title="sign in" onPress={signIn}/>
            <Button title="sign up" onPress={goToSignUp}/>
        </View>
    )
}

const styles = StyleSheet.create({})
