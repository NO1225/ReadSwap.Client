import { AsyncStorage } from "react-native";

const ACCESS_TOKEN = "ACCESSTOKEN";

export async function removeAccessTokenService() {
    await AsyncStorage.removeItem(ACCESS_TOKEN);
}