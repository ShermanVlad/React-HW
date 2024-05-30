import React, {FC} from 'react';
import {ICarsWithAuth} from "../models/ICarsWithAuth";

interface IProps{
    cars: ICarsWithAuth[]
}

const CarsComponent:FC<IProps> = ({cars}) => {
    return (
        <div>
            {
                cars.map(car => <div key={car.id}>{car.id} {car.brand} {car.year} {car.price}</div>)
            }
        </div>
    );
};

export default CarsComponent;