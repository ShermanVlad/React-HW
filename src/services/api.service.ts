import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

const axiosInstance= axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
})

const userService = {
    getUsers: async ():Promise<AxiosResponse<IUserModel[]>> => await axiosInstance.get('users'),
    }

const postService = {
    getPosts: async ():Promise<AxiosResponse<IPostModel[]>> => await axiosInstance.get('posts')
}

const commentsService ={
    getComments: async (): Promise<AxiosResponse<ICommentModel[]>> => await axiosInstance.get('comments')
}

export {
    userService,
    postService,
    commentsService
}