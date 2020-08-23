import { AsyncStorage } from "react-native";

const ACCESS_TOKEN = "ACCESSTOKEN";

export async function getAccessTokenService(): Promise<string> {
    let accessToken = await AsyncStorage.getItem(ACCESS_TOKEN);

    return accessToken as string;
}