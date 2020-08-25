import { AsyncStorage } from "react-native";

const REFRESH_TOKEN = "REFRESHTOKEN";

export async function getRefreshTokenService() : Promise<string> {
    let token = await AsyncStorage.getItem(REFRESH_TOKEN);
    let refreshToken :string = "";
    if(token!=null)
    {
        refreshToken = token;        
    }

    return refreshToken;
}