import { manageAccessTokenService } from "../helper/manageAccessTokenService";
import { signIn } from "./signIn";


export async function tokenSignIn() {
    if(await manageAccessTokenService())
    {
       await signIn();
    }
}