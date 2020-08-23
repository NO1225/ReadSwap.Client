import axios from "axios";
import ApiRoutes from "../constants/ApiRoutes";

export async function signInService(email: string, passward: string) {
    let response = await axios.post<ResponseWithData<SignInData>>(ApiRoutes.signIn, {
        email,
        passward
    })

    return response.data;
}