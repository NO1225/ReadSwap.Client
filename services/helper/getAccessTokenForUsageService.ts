import { getAccessTokenService } from "../storageServices/getAccessTokenService";
import { manageAccessTokenService } from "./manageAccessTokenService";
import { signOut } from "../navigation/signOut";

export async function getAccessTokenForUsageService(): Promise<string> {
    if (await manageAccessTokenService() == false) {
        signOut();
    }
    let token = await getAccessTokenService();

    return token;
}