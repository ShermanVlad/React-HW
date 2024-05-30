import axios, {AxiosError} from "axios";
import {AuthDataModel} from "../models/AuthDataModel";
import {ITokenObtainPair} from "../models/ITokenObtainPair";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {retrieveLSData} from "../helpers/retriveLSData";

const axiosInstance=axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
    headers: {}
})

axiosInstance.interceptors.request.use((request)=>{
    if (localStorage.getItem('TokenPair') && request.url !== "/auth/refresh")
        request.headers.set('Authorization', 'Bearer' + retrieveLSData<ITokenObtainPair>("TokenPair").access)
    return request
})

const authService={
    authentication: async (authData: AuthDataModel):Promise<boolean> =>{
        let response;
        try {
            response = await axiosInstance.post<ITokenObtainPair>('/auth', authData);
            localStorage.setItem('TokenPair', JSON.stringify(response.data));
        } catch (e) {
            console.log(e)
        }

        return !!(response?.data?.access && response?.data?.refresh)
    },

    refresh: async (refreshToken: string)=>{
        const response = await axiosInstance.post('/auth/refresh', {refresh: refreshToken});
        localStorage.setItem('TokenPair', JSON.stringify(response.data));

    }
}

const carsService={
    getCars: async () => {

        try {
            const response = await axiosInstance.get<ICarPaginatedModel>('/cars');
            return response.data;

        } catch (e) {
            const axiosError = e as AxiosError;
            if (axiosError?.response?.status === 401) {
                const refreshToken = retrieveLSData<ITokenObtainPair>('TokenPair').refresh;
                await authService.refresh(refreshToken);
                await carsService.getCars();
            }

        }

    }
        // getCars: async (): Promise<ICarPaginatedModel | null>=>{
        //     try {
        //         const response = await axiosInstance.get<ICarPaginatedModel>('/cars');
        //         console.log(response.data);
        //         return response.data;
        //     } catch (e){
        //         let axiosError = e as AxiosError;
        //         console.log(axiosError);
        //         if (axiosError?.response?.status===401){
        //             const refreshToken = retrieveLSData<ITokenObtainPair>('TokenPair').refresh;
        //             await authService.refresh(refreshToken);
        //             return  await carsService.getCars()
        //         }
        //     }
        //     return null
        // }
}

export {authService, carsService}