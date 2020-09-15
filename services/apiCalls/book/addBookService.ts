import axios from "axios";
import { getAccessTokenForUsageService } from "../../helper/getAccessTokenForUsageService";
import ApiRoutes from "../../../constants/ApiRoutes";

type addBookBody={
    title:string;
    author:string;
    description:string;
    condition:number;
    year:number;
}

export async function addBookService(body:addBookBody)
{   
    let token = await getAccessTokenForUsageService();

    if(token==null)
    {
        return null;
    }

    let response = await axios.post<ResponseWithData<AddBookData>>(ApiRoutes.addBook,body,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })

    return response.data;
}