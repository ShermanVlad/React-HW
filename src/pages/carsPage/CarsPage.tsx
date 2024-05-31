import React, {useEffect, useState} from 'react';
import CarsComponent from "../../components/CarsComponent";
import {carsService} from "../../services/api.services";
import {ICarsWithAuth} from "../../models/ICarsWithAuth";
import  styles from './CarsPage.module.css'

const CarsPage = () => {

    const [carsArr, setCarsArr] = useState<ICarsWithAuth[]>([])

    useEffect(() => {
        carsService.getCars().then(value => {
            if (value?.items){
                setCarsArr(value.items)
            }
        })
    }, []);

    return (
        <div className={styles.carsPage}>
            <CarsComponent cars={carsArr}/>
        </div>
    );
};

export default CarsPage;