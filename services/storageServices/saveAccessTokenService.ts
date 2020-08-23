import { AsyncStorage } from "react-native";

const ACCESS_TOKEN = "ACCESSTOKEN";

export async function saveAccessTokenService(accessToken: string) {
    await AsyncStorage.setItem(ACCESS_TOKEN,accessToken);
}