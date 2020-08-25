import { AsyncStorage } from "react-native";
import checkTokenExpiry from "../helper/checkTokenExpiry";

const ACCESS_TOKEN = "ACCESSTOKEN";

export async function getAccessTokenService(): Promise<string> {
    let token = await AsyncStorage.getItem(ACCESS_TOKEN);
    let accessToken :string = "";
    if(token!=null)
    {
        accessToken = token;        
    }

    return accessToken;
}