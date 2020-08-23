import { AsyncStorage } from "react-native";

const REFRESH_TOKEN = "REFRESHTOKEN";

export async function getRefreshTokenService() : Promise<string> {
    let refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN);

    return refreshToken as string;
}