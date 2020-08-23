import { AsyncStorage } from "react-native";

const REFRESH_TOKEN = "REFRESHTOKEN";

export async function saveRefreshTokenService(refreshToken: string) {
    await AsyncStorage.setItem(REFRESH_TOKEN,refreshToken);
}