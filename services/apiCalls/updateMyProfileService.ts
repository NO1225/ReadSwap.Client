import axios from "axios";
import ApiRoutes from "../../constants/ApiRoutes";
import { getAccessTokenForUsageService } from "../helper/getAccessTokenForUsageService";

type createProfileBody={
    firstName:string;
    lastName:string;
    address:string;
}

export async function updateMyProfileService(body:createProfileBody)
{   
    let token = await getAccessTokenForUsageService();

    if(token==null)
    {
        return null;
    }

    let response = await axios.post<ResponseWithData<ProfileData>>(ApiRoutes.EditMyProfile,body,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })

    return response.data;
}