import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent: FC = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={'/'}>auth page</NavLink></li>
                <li><NavLink to={'cars'}>cars page</NavLink></li>
            </ul>
            <hr/>
        </div>
    );
};

export default HeaderComponent;