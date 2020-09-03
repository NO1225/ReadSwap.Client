import axios from "axios";
import ApiRoutes from "../../constants/ApiRoutes";
import { getAccessTokenForUsageService } from "../helper/getAccessTokenForUsageService";

type createProfileBody={
    firstName:string;
    lastName:string;
    address:string;
}

export async function createMyProfileService(body:createProfileBody)
{   
    let token = await getAccessTokenForUsageService();

    let response = await axios.post<BaseResponse>(ApiRoutes.createMyProfile,body,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })

    console.log(response);
    return response.data;
}