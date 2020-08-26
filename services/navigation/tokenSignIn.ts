import { manageAccessTokenService } from "../helper/manageAccessTokenService";
import { signIn } from "./signIn";


export async function tokenSignIn() : Promise<boolean> {
    return await manageAccessTokenService();
}