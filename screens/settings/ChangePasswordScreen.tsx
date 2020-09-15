import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { FontSize } from '../../constants/FontSize';
import validator from 'validator';
import { useLocalErrorMessage } from '../../hooks/useLocalErrorMessage';
import { changePasswordService } from '../../services/apiCalls/changePasswordService';
import { StackNavigationProp } from '@react-navigation/stack';
import { View } from '../../components/themed/View';
import { Text } from '../../components/themed/Text';
import InputWithLabel from '../../components/customComponent/InputWithLabel';
import { useLocale } from '../../hooks/useLocale';
import IconButton from '../../components/customComponent/IconButton';
import StagesLayout from '../../components/layouts/StagesLayout';

export default function ChangePasswordScreen({navigation}:{navigation:StackNavigationProp<SettingsStackParameterList,"ChangePasswordScreen">}) {
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


    const [oldPassword, setOldPassword] = useState<string>("");
    const [oldPasswordErrorMessage, setOldPasswordErrorMessage] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [newPasswordErrorMessage, setNewPasswordErrorMessage] = useState<string>("");

    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState<string>("");


    const validateOldPassword = async (): Promise<boolean> => {
        let result: boolean = true;
        if (validator.isEmpty(oldPassword) == true) {
            setOldPasswordErrorMessage(useLocalErrorMessage({}, "required"));
            result = false;
        }
        else
            setOldPasswordErrorMessage("");

        return result;
    }

    const changePassword = async (): Promise<boolean> => {
        let result: boolean = true;

        if (validator.equals(newPassword, confirmPassword) == false) {
            setConfirmPasswordErrorMessage(useLocalErrorMessage({}, "confirmPasswordDoesntMatch"))
            result = false;
        }
        else
            setConfirmPasswordErrorMessage("");

        if (validator.isLength(newPassword, { min: 8, max: 20 }) == false) {
            setNewPasswordErrorMessage(useLocalErrorMessage({}, "passwordLength"))
            result = false;
        }
        else
            setNewPasswordErrorMessage("");

        if (result == false)
            return result;

        let response = await changePasswordService(
            oldPassword,
            newPassword
        )

        if(response == null)
        {
            return false;
        }

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
                            errorMessage={oldPasswordErrorMessage}
                            label={useLocale({}, "oldPasswordLabel")}
                            setValue={(value: string) => setOldPassword(value)}
                            value={oldPassword}
                            secureTextEntry
                            placeholder={useLocale({}, "oldPasswordLabel")}
                        />
                    </View>
                    <View>
                        <IconButton locked name={useLocale({},"direction")=="rtl"?"arrow-left":"arrow-right"} onClick={nextHundler} />
                    </View>

                </View>),
            Verifyier: validateOldPassword,
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
                            errorMessage={newPasswordErrorMessage}
                            label={useLocale({}, "newPasswordLabel")}
                            setValue={(value: string) => setNewPassword(value)}
                            value={newPassword}
                            secureTextEntry
                            placeholder={useLocale({}, "newPasswordLabel")}
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
            Submit: changePassword
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

const styles = StyleSheet.create({})
