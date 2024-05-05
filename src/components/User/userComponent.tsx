import React, {
    FC
} from 'react';
import IUserModel
    from '../../models/User/userModel';
import styles from "./user.module.css"


type IPropsUserWithFunc =
    {
        user: IUserModel,
    }
    & {
    userId: (id: number) => void
} & {
    children?: React.ReactNode
}

const UserComponent: FC<IPropsUserWithFunc> = ({
                                                   user,
                                                   userId
                                               }) => {

    const onclickUserId = () => {
        if (userId) {
            userId(user.id);
        }
    };

    return (
        <div  className={styles.UserDiv}>
            <h2>{user.firstName} {user.lastName} {user.maidenName}</h2>
            <img
                src={user.image}
                alt={user.firstName}/>
            <h4>Age: {user.age}</h4>
            <h4>gender: {user.gender}</h4>
            <h4>email: {user.email}</h4>
            <h4>phone: {user.phone}</h4>
            <h4>username: {user.username}</h4>
            <h4>password: {user.password}</h4>
            <h4>birthDate: {user.birthDate}</h4>
            <h4>UserID: {user.id}</h4>

            <button
                onClick={onclickUserId} >Choose
            </button>
        </div>
    );
};

// id: number,
//     gender?: string,
//     email?: string,
//     phone?: string,
//     username?: string,
//     password?: string,
//     birthDate?: string,
//     image?: string,
//     bloodGroup?: string,
//     height?: number,
//     weight?: number,
//     eyeColor?: string,
//     hair?: {
//         color?: string,
//         type?: string
//     },
//     domain?: string,
//     ip?: string,
//     address?: {
//         address?: string,
//         city?: string,
//         coordinates?: {
//             lat?: number,
//             lng?: number
//         },
//         postalCode?: string,
//         state?: string
//     },
//     macAddress?: string,
//     university?: string,
//     bank?: {
//         cardExpire?: string,
//         cardNumber?: string,
//         cardType?: string,
//         currency?: string,
//         iban?: string
//     },
//     company?: {
//         address?: {
//             address?: string,
//             city?: string,
//             coordinates?: {
//                 lat?: number,
//                 lng?: number
//             },
//             postalCode?: string,
//             state?: string
//         },
//         department?: string,
//         name?: string,
//         title?: string
//     },
//     ein?: string,
//     ssn?: string,
//     userAgent?: string

export default UserComponent;