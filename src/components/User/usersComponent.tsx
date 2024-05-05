import React, {
    FC,
    useEffect,
    useState
} from 'react';
import {
    getUsers
} from '../../servises/dummy.api.service';
import IUserModel
    from "../../models/User/userModel";
import UserComponent
    from "./userComponent";
import styles from "./user.module.css"
interface IProps{
    userId:(userId:number)=>void,
}

const UsersComponent: FC<IProps> = ({userId}) => {

    const [users, setUsers] = useState<IUserModel[]>([])

    useEffect(() => {
        getUsers().then(({data: {users}}) => setUsers(users))
    }, []);

    return (
        <div  className={styles.UsersDiv}>
            {users.map(user => (
                <UserComponent
                    key={user.id}
                    user={user}
                    userId={userId}
                />))}
        </div>
    );
};

export default UsersComponent;