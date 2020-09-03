import checkTokenExpiry from "../helper/checkTokenExpiry";
import { refreshTokensService } from "../apiCalls/refreshTokensService";
import { getRefreshTokenService } from "../storageServices/getRefreshTokenService";
import { getAccessTokenService } from "../storageServices/getAccessTokenService";
import { saveAccessTokenService } from "../storageServices/saveAccessTokenService";
import { saveRefreshTokenService } from "../storageServices/saveRefreshTokenService";
import { signOut } from "../navigation/signOut";

export async function manageAccessTokenService(): Promise<boolean> {
    let accessToken = await getAccessTokenService();
    if (accessToken != "" && checkTokenExpiry(accessToken)) {
        return true;
    }
    else {
        let refreshToken = await getRefreshTokenService();
        if (refreshToken != "" && accessToken != "") {
            let response = await refreshTokensService(accessToken, refreshToken);
            if (response == null) {
                signOut();
            }
            else {
                if (response.success) {
                    await saveAccessTokenService(accessToken);
                    await saveRefreshTokenService(refreshToken);
                    return true;
                }
            }

        }
    }
    return false;
}