import axios from "axios";
import ApiRoutes from "../../constants/ApiRoutes";

export async function refreshTokensService(accessToken:string,refreshToken:string) {
    let response = await axios.post<ResponseWithData<RefreshTokenData>>(ApiRoutes.refreshToken, {
        accessToken,
        refreshToken
    })

    return response.data;
}