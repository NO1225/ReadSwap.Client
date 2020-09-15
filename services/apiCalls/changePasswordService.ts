import axios from "axios";
import ApiRoutes from "../../constants/ApiRoutes";
import { getAccessTokenForUsageService } from "../helper/getAccessTokenForUsageService";

export async function changePasswordService(oldPassword: string, newPassword: string) {
    let token = await getAccessTokenForUsageService();

    if (token == null) {
        return null;
    }

    let response = await axios.post<BaseResponse>(ApiRoutes.changePassword, {
        oldPassword,
        newPassword
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return response.data;
}