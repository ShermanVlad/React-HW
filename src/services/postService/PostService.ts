import {AxiosInstance} from "../../axios/axios";
import {urls} from "../../constants/urls";
import {IPostModel} from "../../models/IPostModel";

export const PostService={
    getAll : async (): Promise<IPostModel[]>=>{
        const  response= await AxiosInstance.get<IPostModel[]>(urls.posts.base)
        return response.data
    },
    getById: async (id: string): Promise<IPostModel>=>{
        const responce = await AxiosInstance.get<IPostModel>(urls.posts.byId(+id))
        return responce.data
    }
}