import React, {useEffect, useState} from 'react';
import CarsComponent from "../../components/CarsComponent";
import styles from './CarsPage.module.css'
import {authService, carsService} from "../../services/api.services";
import {useNavigate, useSearchParams} from "react-router-dom";
import {ICarPaginatedModel} from "../../models/ICarPaginatedModel";
import PaginationComponent from "../../components/PaginationComponent";
import {AxiosError} from "axios";

const CarsPage = () => {
    const navigate = useNavigate()
    const [query, serQuery] = useSearchParams()
    const [carsPaginatedObj, setCarsPaginatedObj] = useState<ICarPaginatedModel>({
        items: [],
        prev: null,
        next: null,
        total_items: 0,
        total_pages: 0
    });

    useEffect(() => {

        const getCarsData = async () => {

            if (localStorage.getItem("tokenPair")) {
                try {
                    await carsService.getCars(query.get('page') || '1').then(value => {
                        if (value?.items) {
                            // console.log(value.items)
                            setCarsPaginatedObj(value)
                        } else {
                            console.log("You haven't any car")
                        }
                    })
                } catch (e) {
                    const axiosError = e as AxiosError;
                    if (axiosError && axiosError?.response?.status === 401) {
                        try {
                            await authService.refresh();
                        } catch (e) {
                            return navigate('/')
                        }
                        await carsService.getCars(query.get('page') || '1').then(value => {
                            if (value?.items) {
                                setCarsPaginatedObj(value)
                            } else {
                                console.log("You haven't any car")
                            }
                        })
                    }
                }
            } else {
                console.log('you should login')
            }

        }

        getCarsData();

    }, [query]);

    return (
        <div className={styles.carsPage}>
            <CarsComponent cars={carsPaginatedObj.items}/>
            <PaginationComponent next={carsPaginatedObj.next} prev={carsPaginatedObj.prev}/>
        </div>
    );
};

export default CarsPage;

