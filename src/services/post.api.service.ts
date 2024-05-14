import axios
    , {
    AxiosResponse
} from "axios";
import {
    IFormProps
} from "../components/form/formComponent";

export type IPostProps= IFormProps & {postID:number}

 const axiosInstance=axios.create({
     baseURL: "https://jsonplaceholder.typicode.com",
     headers: {'Content-type': 'application/json; charset=UTF-8'}
 })

axiosInstance.interceptors.request.use(request => {
    console.log(request.data);
    return request;
});
const poster=(post:IFormProps):Promise<AxiosResponse<IPostProps>> =>{
     return axiosInstance.post("/posts", post)
}
export  {poster}