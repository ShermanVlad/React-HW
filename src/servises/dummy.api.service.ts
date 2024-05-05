import axios
    , {
    AxiosResponse
} from "axios";

import {
    IUserResponseModel
} from "../models/User/userResponceModel";
import {
    IPostResponseModel
} from "../models/Post/postResponceModel";

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {"Content-Type": "application/json"}
})

const getUsers = (): Promise<AxiosResponse<IUserResponseModel>> => {
    return axiosInstance.get('/users')
}

const getPostsByUserId=(id:number):Promise<AxiosResponse<IPostResponseModel>> =>{
    return axiosInstance.get('/posts/user/'+id)
}

export {
    getUsers,
    getPostsByUserId
}