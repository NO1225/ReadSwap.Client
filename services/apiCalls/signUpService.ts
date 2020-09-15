import axios from "axios";
import ApiRoutes from "../../constants/ApiRoutes";

export async function signUpService(email: string, password: string) {
    let response = await axios.post<ResponseWithData<SignUpData>>(ApiRoutes.signUp, {
        email,
        password
    })

    return response.data;
}