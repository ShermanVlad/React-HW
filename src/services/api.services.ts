import axios, {AxiosError, AxiosResponse} from 'axios';
import {ITokenObtainPair} from "../models/ITokenObtainPair";
import {AuthDataModel} from "../models/AuthDataModel";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {retrieveLSData} from "../helpers/retriveLSData";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
    headers: {}
});

axiosInstance.interceptors.request.use(request => {

    if (localStorage.getItem('tokenPair') && (request.url !== '/auth' && request.url !== '/auth/refresh')) {
        const iTokenObtainPair = retrieveLSData<ITokenObtainPair>('tokenPair');
        request.headers.set('Authorization', 'Bearer ' + iTokenObtainPair.access);
    }

    return request;
})

const authService = {
    authentication: async (authData: AuthDataModel): Promise<boolean> => {
        const response = await axiosInstance.post<ITokenObtainPair>('/auth', authData);
        localStorage.setItem('tokenPair', JSON.stringify(response.data));

        return !!(response?.data?.access && response?.data?.refresh);
    },
    refresh: async () => {
        const refreshToken = retrieveLSData<ITokenObtainPair>('tokenPair').refresh
        const response = await axiosInstance.post<ITokenObtainPair>('/auth/refresh', {refresh: refreshToken});
        localStorage.setItem('tokenPair', JSON.stringify(response.data));
    },

}

const carsService = {
    getCars: async (page: string = '1'): Promise<ICarPaginatedModel | undefined> => {
        const response = await axiosInstance.get<ICarPaginatedModel>('/cars', {params: {page: page}});
        return response.data;
    }
}

const userService = {
    registerUser: async (userData: AuthDataModel): Promise<AuthDataModel | undefined> => {
        try {
            const response: AxiosResponse<AuthDataModel> = await axiosInstance.post('/users', userData);
            return response.data
        } catch (e) {
            const axiosError = e as AxiosError
            if (axiosError?.response?.status === 400) {
                console.log('user is already registered.')
            }
        }
    }
}

export {
    authService,
    carsService,
    userService
}