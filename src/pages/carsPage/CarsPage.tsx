import React, {useEffect, useState} from 'react';
import CarsComponent from "../../components/CarsComponent";
import {ICarsWithAuth} from "../../models/ICarsWithAuth";
import  styles from './CarsPage.module.css'
import {carsService} from "../../services/api.services";

const CarsPage = () => {

    const [carsArr, setCarsArr] = useState<ICarsWithAuth[]>([]);

    useEffect(() => {

        if (localStorage.getItem("tokenPair")){
            carsService.getCars().then(value => {
                if (value?.items){
                    setCarsArr(value.items)
                }
            })
        }
        else {console.log('you should login')}
    }, []);

    return (
        <div className={styles.carsPage}>
            <CarsComponent cars={carsArr}/>
        </div>
    );
};

export default CarsPage;