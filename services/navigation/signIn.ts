import appConetentRef from "../../references/appContentRef";
import { saveAccessTokenService } from "../storageServices/saveAccessTokenService";
import { saveRefreshTokenService } from "../storageServices/saveRefreshTokenService";

export async function signIn(accessToken: string, refreshToken: string) {
    await saveAccessTokenService(accessToken);
    await saveRefreshTokenService(refreshToken);
    appConetentRef.current?.props.signIn();
}