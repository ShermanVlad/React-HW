import axios
    , {
    AxiosResponse
} from "axios";
import {
    IUserModel
} from "../models/IUserModel";
import {
    IPostModel
} from "../models/IPostModel";
import {
    ICommentModel
} from "../models/ICommentModel";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {}
})

const apiService={
    getUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get("/users")
    },

    getPosts:():Promise<AxiosResponse<IPostModel[]>> =>{
        return axiosInstance.get("/posts")
    },

    getComments:():Promise<AxiosResponse<ICommentModel[]>> =>{
        return axiosInstance.get("/comments")
    }
}

export {apiService}