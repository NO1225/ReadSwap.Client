import axios from "axios";
import ApiRoutes from "../../constants/ApiRoutes";
import { getAccessTokenForUsageService } from "../helper/getAccessTokenForUsageService";

export async function changePasswordService(oldPassword: string, newPassward: string) {
    let token = await getAccessTokenForUsageService();

    if (token == null) {
        return null;
    }

    let response = await axios.post<BaseResponse>(ApiRoutes.changePassword, {
        oldPassword,
        newPassward
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return response.data;
}