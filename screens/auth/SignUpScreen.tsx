import React, { useState } from 'react'
import axios from 'axios'
import { StyleSheet, TextInput, Button } from 'react-native'
import { View, Text } from '../../components/Themed'
import { useLocale } from '../../hooks/useLocale';
import { checkEmailService } from '../../services/checkEmailService';
import { useThemeColor } from '../../hooks/useThemeColor';

export default function SignUpScreen() {
    const styles = StyleSheet.create({
        inputContainer: {
            padding: 5,
            margin: 5,
            borderColor: useThemeColor({}, "tint"),
            borderWidth: 1,

        }
    })



    const [email, setEmail] = useState<string>("");

    const nextHundler = async () => {
        let response = await checkEmailService(email);

        console.log(response.data.exists);
    }

    return (
        <View>
            <Text>{useLocale({}, "createNewAccountHeader")}</Text>
            <View>
                <View>
                    <Text>{useLocale({}, "emailLabel")}</Text>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder={useLocale({}, "emailLabel")} value={email} onChangeText={(value: string) => setEmail(value)} />
                    </View>
                </View>
                <Button title=">" onPress={nextHundler} />
            </View>
        </View>
    )
}
