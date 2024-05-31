import React, {FC} from 'react';
import {ICarsWithAuth} from "../models/ICarsWithAuth";

const CarComponent: FC<ICarsWithAuth> = ({id, photo,price,brand, year}) => {
    return (
        <div>
            <h3>{id}: {brand} - {year} - {price}</h3>
            {/*<h3>{photo}</h3>*/}
            <hr/>
        </div>
    );
};

export default CarComponent;