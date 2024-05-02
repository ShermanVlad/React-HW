import axios
    , {
    AxiosResponse
} from "axios";
import IUserModel
    from "../models/userModel";

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {"Content-Type": "application/json"}
})

const getUsers=():Promise<AxiosResponse<IUserModel[]>> =>{
return axiosInstance.get('/users')
}

export {
    getUsers
}