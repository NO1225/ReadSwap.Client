import { manageAccessTokenService } from "../helper/manageAccessTokenService";
import { signIn } from "./signIn";
import { removeAccessTokenService } from "../storageServices/removeAccessTokenService";
import { removeRefreshTokenService } from "../storageServices/removeRefreshTokenService";


export async function tokenSignIn(): Promise<boolean> {
    if (await manageAccessTokenService()) {
        return true;
    }
    else {
        await removeAccessTokenService();
        await removeRefreshTokenService();
        return false;
    }

}