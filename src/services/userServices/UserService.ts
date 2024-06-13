import {AxiosInstance} from "../../axios/axios";
import {urls} from "../../constants/urls";
import {IUserModel} from "../../models/IUserModel";

export const UserService={
    getAll: async (): Promise<IUserModel[]>=>{
        const response = await AxiosInstance.get<IUserModel[]>(urls.users.base)
        return response.data
    },
    getById: async (id: string): Promise<IUserModel> =>{
        const response = await AxiosInstance.get<IUserModel>(urls.users.byId(+id));
        return response.data
    }
}