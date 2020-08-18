import axios from "axios";
import ApiRoutes from "../constants/ApiRoutes";

export async function signUpService(email: string, passward: string) {
    let response = await axios.post<ResponseWithData<SignUpData>>(ApiRoutes.signUp, {
        email,
        passward
    })

    return response.data;
}