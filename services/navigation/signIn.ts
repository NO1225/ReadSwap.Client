import appConetentRef from "../../references/appContentRef";
import { saveAccessTokenService } from "../storageServices/saveAccessTokenService";
import { saveRefreshTokenService } from "../storageServices/saveRefreshTokenService";

export async function signIn() {
    appConetentRef.current?.props.signIn();
}