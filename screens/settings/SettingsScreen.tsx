import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { View } from "../../components/themed/View"
import { Text } from "../../components/themed/Text"
import IconButton from '../../components/customComponent/IconButton'
import { signOut } from '../../services/navigation/signOut'
import Loading from '../../components/Loading'
import { useLocale } from '../../hooks/useLocale'
import { FontSize } from '../../constants/FontSize'
import { getMyProfileService } from '../../services/apiCalls/getMyProfileService'
import TextWithLabel from '../../components/customComponent/TextWithLabel'
import { StackNavigationProp } from '@react-navigation/stack'

export default function SettingsScreen({ navigation }: { navigation: StackNavigationProp<SettingsStackParameterList, "SettingsScreen"> }) {
    const styles = StyleSheet.create({
        container: {
            paddingTop: 35,
            alignItems: "center",
        },

        titleText: {
            fontSize: FontSize.Large
        },
        margin2: {
            margin: 8
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
        spaceAround: {
            justifyContent: "space-around"
        },
        fullWidth: {
            width: '100%'
        }
    })

    const [loaded, setLoaded] = useState(false);
    const [userInfo, setUserInfo] = useState<ProfileData>({
        id: 0, address: "", firstName: "", lastName: "", rating: 0
    });

    const getUserProfile = async () => {
        let response = await getMyProfileService();
        if (response == null) {
            signOut();
            return false;
        }
        if (response.success) {
            setUserInfo(response.data);
            return true;
        }
        return false;
    }

    const updateProfileOnFocus = ()=>{
        //console.log(loaded);
        // TODO: Fix this
        if (true ||  loaded == true) {
            getUserProfile();
        }
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', updateProfileOnFocus);

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [navigation]);

    if (loaded == false) {
        return <Loading onStart={getUserProfile} onFinish={async () => setLoaded(true)} />
    } else {
        return (
            <View style={[
                styles.container,
                styles.flex1
            ]}>
                <View >
                    <Text style={styles.titleText}>{useLocale({}, "profileTitle")}</Text>
                </View>
                <View style={[styles.flex1, styles.fullWidth]}>
                    <TextWithLabel label={useLocale({}, "viewFirstNameLabel")} value={userInfo.firstName} />
                    <TextWithLabel label={useLocale({}, "viewLastNameLabel")} value={userInfo.lastName} />
                    <TextWithLabel label={useLocale({}, "viewAddressLabel")} value={userInfo.address} />
                </View>
                <View style={[styles.flex1, styles.fullWidth]}>
                    <View style={[styles.rowFlex, styles.spaceAround]}>
                        <IconButton name={"sign-out"} onClick={async () => { signOut(); }} />
                        <IconButton name={"key"} onClick={async () => { navigation.navigate("ChangePasswordScreen") }} />
                        <IconButton name={"edit"} onClick={async () => { navigation.navigate("ChangeProfileScreen") }} />
                    </View>
                </View>


            </View>
        )
    }
}

