import { getAccessTokenService } from "../storageServices/getAccessTokenService";
import { manageAccessTokenService } from "./manageAccessTokenService";

export async function getAccessTokenForUsageService(): Promise<string|null> {
    if (await manageAccessTokenService() == false) {
        return null;
    }
    let token = await getAccessTokenService();

    return token;
}