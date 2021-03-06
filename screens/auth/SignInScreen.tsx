import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { View } from "../../components/themed/View";
import { Text } from "../../components/themed/Text";
import { useLocale } from '../../hooks/useLocale';
import { StackNavigationProp } from '@react-navigation/stack';
import { FontSize } from '../../constants/FontSize';
import validator from 'validator';
import { useLocalErrorMessage } from '../../hooks/useLocalErrorMessage';
import { checkEmailService } from '../../services/apiCalls/checkEmailService';
import InputWithLabel from '../../components/customComponent/InputWithLabel';
import IconButton from '../../components/customComponent/IconButton';
import StagesLayout from '../../components/layouts/StagesLayout';

import { signInService } from '../../services/apiCalls/signInService';
import { signIn } from '../../services/navigation/signIn';
import { saveAccessTokenService } from '../../services/storageServices/saveAccessTokenService';
import { saveRefreshTokenService } from '../../services/storageServices/saveRefreshTokenService';
import { tokenSignIn } from '../../services/navigation/tokenSignIn';
import Loading from '../../components/Loading';
import TextButton from '../../components/themed/TextButton';

export default function SignInScreen({ navigation }: { navigation: StackNavigationProp<AuthNavigationParamList, "SignInScreen"> }) {

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

    const [loaded, setLoaded] = useState(false);


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

        if (response.data.exists == false) {
            setEmailErrorMessage(useLocalErrorMessage({}, "emailDoesntExist"));
            return false;
        }

        return result;
    }
    const checkPassword = async (): Promise<boolean> => {

        let result: boolean = true;

        let response = await signInService(
            email,
            password
        )

        if (response.success == true) {

            await saveAccessTokenService(response.data.accessToken);
            await saveRefreshTokenService(response.data.refreshToken);

            return true
        }

        return false;
    }


    const onSuccess = async () => {
        await signIn();
    }

    const manageTokenSignIn = async (success: boolean) => {
      
        if (success)
            signIn();
        else
            setLoaded(true)
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
                        <IconButton locked name={useLocale({}, "direction") == "rtl" ? "arrow-left" : "arrow-right"} onClick={nextHundler} />
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
                    </View>
                    <View style={[
                        styles.rowFlex,
                        styles.spaceBetween,
                    ]}>
                        <IconButton locked name={useLocale({}, "direction") == "rtl" ? "arrow-right" : "arrow-left"} onClick={backHundler} />
                        <IconButton locked willDie name="check" onClick={finishHundler} />
                    </View>

                </View>
                ),
            Verifyier: async () => true,
            Submit: checkPassword
        }
    ];

    if (loaded == false) {
        return <Loading onStart={tokenSignIn} onFinish={manageTokenSignIn} />
    } else {
        return (
            <View style={[
                styles.container,
                styles.flex1
            ]}>
                <View >
                    <Text style={styles.titleText}>{useLocale({}, "signingInHeader")}</Text>
                </View>
                <TextButton
                    text={useLocale({}, "goToSignUp")}
                    onClick={async () => navigation.navigate("SignUpScreen")}
                />


                <StagesLayout Stages={Stages} onFinish={onSuccess} />

            </View>
        )
    }


}

