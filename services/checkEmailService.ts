import axios from "axios";
import ApiRoutes from "../constants/ApiRoutes";

export async function checkEmailService(email:string)
{
    let response = await axios.post<ResponseWithData<CheckEmailData>>(ApiRoutes.checkEmail,{
        email
    })

    return response.data;
}