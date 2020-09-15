import React, { useState } from 'react'
import { StyleSheet, Button } from 'react-native'
import { View } from "../../components/themed/View";
import { Text } from "../../components/themed/Text";
import { useLocale } from '../../hooks/useLocale';
import { checkEmailService } from '../../services/apiCalls/checkEmailService';
import { signUpService } from '../../services/apiCalls/signUpService';
import { StackNavigationProp } from '@react-navigation/stack';
import StagesLayout from '../../components/layouts/StagesLayout';
import { FontSize } from '../../constants/FontSize';
import InputWithLabel from '../../components/customComponent/InputWithLabel';
import IconButton from '../../components/customComponent/IconButton';
import validator from 'validator';
import { useLocalErrorMessage } from '../../hooks/useLocalErrorMessage';

export default function SignUpScreen({ navigation }: { navigation: StackNavigationProp<AuthNavigationParamList, "SignUpScreen"> }) {
    const styles = StyleSheet.create({
        container: {
            paddingTop: 35,
            alignItems: "center",
        },

        titleText: {
            fontSize: FontSize.Large
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
        }
    })


    const [email, setEmail] = useState<string>("");
    const [emailErrorMessage, setEmailErrorMessage] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>("");

    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState<string>("");


    const checkEmail = async (): Promise<boolean> => {
        let result: boolean = true;
        if (validator.isEmail(email) == false) {
            setEmailErrorMessage(useLocalErrorMessage({}, "invalidEmail"));
            result = false;
        }
        else
            setEmailErrorMessage("");

        if (result == false)
            return false;

        let response = await checkEmailService(email);

        // if(response.success == false)
        // {
        //     response.errors
        // }

        if (response.data.exists) {
            setEmailErrorMessage(useLocalErrorMessage({}, "emailAlreadyExist"));
            return false;
        }

        return result;
    }

    const signUp = async (): Promise<boolean> => {
        let result: boolean = true;

        if (validator.equals(password, confirmPassword) == false) {
            setConfirmPasswordErrorMessage(useLocalErrorMessage({}, "confirmPasswordDoesntMatch"))
            result = false;
        }
        else
            setConfirmPasswordErrorMessage("");

        if (validator.isLength(password, { min: 8, max: 20 }) == false) {
            setPasswordErrorMessage(useLocalErrorMessage({}, "passwordLength"))
            result = false;
        }
        else
            setPasswordErrorMessage("");

        if (result == false)
            return result;

        let response = await signUpService(
            email,
            password
        )

        return response.success;
    }


    const onSuccess = () => {
        navigation.pop();
    }

    const Stages: Stage[] = [
        {
            Component: (nextHundler, backHundler, finishHundler) =>
                (<View style={[
                    styles.flex1,
                    styles.center
                ]}>
                    <View style={styles.center}>
                        <InputWithLabel
                            errorMessage={emailErrorMessage}
                            label={useLocale({}, "emailLabel")}
                            setValue={(value: string) => setEmail(value)}
                            value={email}
                            placeholder={useLocale({}, "emailLabel")}
                        />
                    </View>
                    <View>
                        <IconButton locked name={useLocale({},"direction")=="rtl"?"arrow-left":"arrow-right"} onClick={nextHundler} />
                    </View>

                </View>),
            Verifyier: checkEmail,
            Submit: async () => true
        },
        {
            Component: (nextHundler, backHundler, finishHundler) =>
                (<View style={[
                    styles.flex1,
                    styles.center
                ]}>
                    <View style={styles.center}>
                        <InputWithLabel
                            errorMessage={passwordErrorMessage}
                            label={useLocale({}, "passwordLabel")}
                            setValue={(value: string) => setPassword(value)}
                            value={password}
                            secureTextEntry
                            placeholder={useLocale({}, "passwordLabel")}
                        />
                        <InputWithLabel
                            errorMessage={confirmPasswordErrorMessage}
                            label={useLocale({}, "confirmPasswordLabel")}
                            setValue={(value: string) => setConfirmPassword(value)}
                            value={confirmPassword}
                            secureTextEntry
                            placeholder={useLocale({}, "confirmPasswordLabel")}
                        />
                    </View>
                    <View style={[
                        styles.rowFlex,
                        styles.spaceBetween,
                    ]}>
                        <IconButton locked name={useLocale({},"direction")=="rtl"?"arrow-right":"arrow-left"} onClick={backHundler} />
                        <IconButton locked name="check" onClick={finishHundler} />
                    </View>

                </View>
                ),
            Verifyier: async () => true,
            Submit: signUp
        }
    ]
    return (
        <View style={[
            styles.container,
            styles.flex1
        ]}>
            <View >
                <Text style={styles.titleText}>{useLocale({}, "createNewAccountHeader")}</Text>
            </View>

            <StagesLayout Stages={Stages} onFinish={onSuccess} />

        </View>
    )
}
