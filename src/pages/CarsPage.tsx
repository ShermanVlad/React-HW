import React, {FC, useEffect, useState} from 'react';
import {ICarsWithAuth} from "../models/ICarsWithAuth";
import {carsService} from "../services/api.services";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import CarsComponent from "../components/CarsComponent";

const CarsPage = () => {

    const [cars, setCars] = useState<ICarsWithAuth[]>([])
    useEffect(() => {
        carsService.getCars().then(value => {
            if (value) {
                setCars([...value.items])
            }
        })
    }, []);
    return (
        <div>
        <CarsComponent cars={cars}/>
        </div>
    );
};

export default CarsPage;