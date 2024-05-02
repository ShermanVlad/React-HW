import React
    , {
    FC,
    ReactNode
} from 'react';
import IUserModel
    from "../models/userModel";

type UserComponentWithChildren<T>=T&{children?:ReactNode}

const UserComponent: FC<UserComponentWithChildren<IUserModel>> = ({id,lastName,firstName}) => {
    return (
        <div>
            {id}-{lastName} {firstName}
        </div>
    );
};

export default UserComponent;