import axios from "axios";
import ApiRoutes from "../../constants/ApiRoutes";

export async function refreshTokensService(accessToken: string, refreshToken: string):Promise< ResponseWithData<RefreshTokenData> | null> {
    try {
        let response = await axios.post<ResponseWithData<RefreshTokenData>>(ApiRoutes.refreshToken, {
            accessToken,
            refreshToken
        })
        return response.data;
    }
    catch (err) {
        console.log(err);
        return null
    }

}