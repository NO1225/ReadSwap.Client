import React, { useState } from 'react'
import axios from 'axios'
import { StyleSheet, TextInput, Button } from 'react-native'
import { View, Text } from '../../components/Themed'
import { useLocale } from '../../hooks/useLocale';
import { checkEmailService } from '../../services/checkEmailService';
import { useThemeColor } from '../../hooks/useThemeColor';
import { signUpService } from '../../services/signUpService';
import { StackNavigationProp } from '@react-navigation/stack';
import StagesLayout from '../../components/layouts/StagesLayout';

export default function SignUpScreen({ navigation }: { navigation: StackNavigationProp<AuthNavigationParamList, "SignUpScreen"> }) {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        },
        inputContainer: {
            padding: 5,
            margin: 5,
            borderColor: useThemeColor({}, "tint"),
            borderWidth: 1,

        }
    })


    const [email, setEmail] = useState<string>("");
    const [passward, setPassward] = useState<string>("");
    const [confirmPassward, setConfirmPassward] = useState<string>("");

    const checkEmail = async () => {

        let response = await checkEmailService(email);

        return response.data.exists == false;
    }

    const signUp = async () => {
        if (passward != confirmPassward) {
            return false;
        }
        let response = await signUpService(
            email,
            passward
        )
        
        return response.success;
    }


    // }

    // const backHundler = async () => {
    //     if (currentStage != 0)
    //         setCurrentStage(currentStage - 1);
    // }


    // const finishHundler = async () => {
    //     if (passward != confirmPassward) {

    //     }
    //     else {
    //         let response = await signUpService(
    //             email,
    //             passward
    //         )
    //         console.log(response.data.email);

    //         if (response.success) {
    //             
    //         }


    //     }


    //     console.log({
    //         email,
    //         passward
    //     });
    // }

    const onSuccess = () => {
        navigation.pop();
    }

    const Stages: Stage[] = [
        {
            Component: (nextHundler, backHundler, finishHundler) =>
                (<View>
                    <View>
                        <Text>{useLocale({}, "emailLabel")}</Text>
                        <View style={styles.inputContainer}>
                            <TextInput placeholder={useLocale({}, "emailLabel")} value={email} onChangeText={(value: string) => setEmail(value)} />
                        </View>
                    </View>
                    <View>
                        <Button title=">" onPress={nextHundler} />
                    </View>

                </View>),
            Verifyier: checkEmail,
            Submit: async () => true
        },
        {
            Component: (nextHundler, backHundler, finishHundler) =>
                (
                    <View>
                        <View>
                            <Text>{useLocale({}, "passwardLabel")}</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder={useLocale({}, "passwardLabel")}
                                    value={passward}
                                    secureTextEntry
                                    onChangeText={(value: string) => setPassward(value)} />
                            </View>
                        </View>
                        <View>
                            <Text>{useLocale({}, "confirmPasswardLabel")}</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder={useLocale({}, "confirmPasswardLabel")}
                                    value={confirmPassward}
                                    secureTextEntry
                                    onChangeText={(value: string) => setConfirmPassward(value)} />
                            </View>
                        </View>
                        <View>
                            <Button title="<" onPress={backHundler} />
                            <Button title="O" onPress={finishHundler} />
                        </View>

                    </View>),
            Verifyier: async () => true,
            Submit: signUp
        }
    ]
    return (
        <View style={styles.container}>
            <Text>{useLocale({}, "createNewAccountHeader")}</Text>
            <StagesLayout Stages={Stages} onFinish={onSuccess} />

        </View>
    )
}
