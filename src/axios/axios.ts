import axios from "axios";
import {baseUrl} from "../constants/urls";

export const AxiosInstance = axios.create(
    {
        baseURL: baseUrl,
        headers: {}
    }
)