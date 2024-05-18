import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/userModel";
import {IPostModel} from "../models/postModel";
import {ICommentModel} from "../models/commentModel";

const axiosInstance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/'})

export const apiService = {
    getUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get('users')
    },

    getPostsOfUsers: (userId: string): Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get(`users/${userId}/posts`)
    },
    getPosts: (): Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get("posts")
    },
    getCommentsOfPosts: (postId: string):Promise<AxiosResponse<ICommentModel[]>> =>{
        return axiosInstance.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    },
    getComments: (): Promise<AxiosResponse<ICommentModel[]>> => {
        return axiosInstance.get("comments")
    }
}

