import axios from "axios";
import ApiRoutes from "../../constants/ApiRoutes";

export async function revokeTokenService():Promise< BaseResponse | null> {
    try {
        let response = await axios.post<BaseResponse>(ApiRoutes.revokeToken)
        
        return response.data;
    }
    catch (err) {
        console.log(err);
        return null
    }

}