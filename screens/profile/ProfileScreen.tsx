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
import { createMyProfileService } from '../../services/apiCalls/createMyProfileService';
import { signIn } from '../../services/navigation/signIn';

export default function ProfileScreen({ navigation }: { navigation: StackNavigationProp<AuthNavigationParamList, "SignUpScreen"> }) {
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


    const [firstName, setFirstName] = useState<string>("");
    const [firstNameErrorMessage, setFirstNameErrorMessage] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [lastNameErrorMessage, setLastNameErrorMessage] = useState<string>("");

    const [address, setAddress] = useState<string>("");
    const [addressErrorMessage, setAddressErrorMessage] = useState<string>("");


    const checkFirstName = async (): Promise<boolean> => {
        return true;
    }

    const checkLastName = async (): Promise<boolean> => {
        return true;
    }

    const checkAddress = async (): Promise<boolean> => {
        return true;
    }

    const createProfile = async (): Promise<boolean> => {
        

        let response = await createMyProfileService(
            {
                firstName,
                lastName,
                address
            }
        )

        return response.success;
    }


    const onSuccess = () => {
        signIn();
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
                            errorMessage={firstNameErrorMessage}
                            label={useLocale({}, "firstNameLabel")}
                            setValue={(value: string) => setFirstName(value)}
                            value={firstName}
                            placeholder={useLocale({}, "firstNameLabel")}
                        />
                    </View>
                    <View>
                        <IconButton locked name={useLocale({}, "direction") == "rtl" ? "arrow-left" : "arrow-right"} onClick={nextHundler} />
                    </View>

                </View>),
            Verifyier: checkFirstName,
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
                            errorMessage={lastNameErrorMessage}
                            label={useLocale({}, "lastNameLabel")}
                            setValue={(value: string) => setLastName(value)}
                            value={lastName}
                            placeholder={useLocale({}, "lastNameLabel")}
                        />
                    </View>
                    <View style={[
                        styles.rowFlex,
                        styles.spaceBetween,
                    ]}>
                        <IconButton locked name={useLocale({}, "direction") == "rtl" ? "arrow-right" : "arrow-left"} onClick={backHundler} />
                        <IconButton locked name={useLocale({}, "direction") == "rtl" ? "arrow-left" : "arrow-right"} onClick={nextHundler} />
                    </View>

                </View>),
            Verifyier: checkLastName,
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
                            errorMessage={addressErrorMessage}
                            label={useLocale({}, "addressLabel")}
                            setValue={(value: string) => setAddress(value)}
                            value={address}
                            placeholder={useLocale({}, "addressLabel")}
                        />
                    </View>
                    <View style={[
                        styles.rowFlex,
                        styles.spaceBetween,
                    ]}>
                        <IconButton locked name={useLocale({}, "direction") == "rtl" ? "arrow-right" : "arrow-left"} onClick={backHundler} />
                        <IconButton locked name="check" onClick={finishHundler} />
                    </View>

                </View>
                ),
            Verifyier: checkAddress,
            Submit: createProfile
        }
    ]
    return (
        <View style={[
            styles.container,
            styles.flex1
        ]}>
            <View >
                <Text style={styles.titleText}>{useLocale({}, "ProfileHeader")}</Text>
            </View>

            <StagesLayout Stages={Stages} onFinish={onSuccess} />

        </View>
    )
}
