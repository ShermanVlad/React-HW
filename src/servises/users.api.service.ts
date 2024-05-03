import axios
    , {
    AxiosResponse
} from "axios";
import IUserModel
    from "../models/userModel";
import { IUserResponseModel } from "../models/userResponseModel";

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {"Content-Type": "application/json"}
})

const getUsers=():Promise<AxiosResponse<IUserResponseModel>> =>{
return axiosInstance.get('/users')
}

const getSingleUser=(id: number):Promise<AxiosResponse<IUserModel>> =>{
    return axiosInstance.get('/users'+id)
}

export {
    getUsers,
    getSingleUser
}