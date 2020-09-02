import axios from "axios";
import ApiRoutes from "../../constants/ApiRoutes";
import { getAccessTokenService } from "../storageServices/getAccessTokenService";

export async function getMyProfileService()
{
    let token = await getAccessTokenService();

    let response = await axios.get<ResponseWithData<ProfileData>>(ApiRoutes.getMyProfile,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })

    console.log(response);
    return response.data;
}