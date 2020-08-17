import axios from "axios";
import ApiRoutes from "../constants/ApiRoutes";

export async function checkEmailService(email:string)
{
    let response = await axios.post<CheckEmailResponse>(ApiRoutes.checkEmail,{
        email
    })

    return response.data;
}