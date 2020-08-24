import { AsyncStorage } from "react-native";

const REFRESH_TOKEN = "REFRESHTOKEN";

export async function removeRefreshTokenService() {
    await AsyncStorage.removeItem(REFRESH_TOKEN);
}