import React, {FC} from 'react';
import {ICarsWithAuth} from "../models/ICarsWithAuth";
import CarComponent from "./CarComponent";

interface IProps{
    cars: ICarsWithAuth[]
}

const CarsComponent:FC<IProps> = ({cars}) => {
    return (
        <div>
            {
                cars.map(car => <CarComponent id={car.id} brand={car.brand} price={car.price} year={car.year} key={car.id} photo={car.photo}/>)
            }
        </div>
    );
};

export default CarsComponent;