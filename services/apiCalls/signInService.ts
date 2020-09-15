import axios from "axios";
import ApiRoutes from "../../constants/ApiRoutes";

export async function signInService(email: string, password: string) {
    let response = await axios.post<ResponseWithData<SignInData>>(ApiRoutes.signIn, {
        email,
        password
    })

    return response.data;
}