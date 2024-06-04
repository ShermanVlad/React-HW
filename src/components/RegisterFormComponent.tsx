import React, {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import {AuthDataModel} from "../models/AuthDataModel";
import {userService} from "../services/api.services";

const RegisterFormComponent: FC = () => {

    const {handleSubmit, register} = useForm<AuthDataModel>();
    const [isUserState, setIsUserState] = useState<AuthDataModel | undefined>()

    const registration= async (formData: AuthDataModel)=>{
        const isReg = await userService.registerUser(formData);
        setIsUserState(isReg);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(registration)}>
                <h3>Registration</h3>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button>register</button>
            </form>
        </div>
    );
};

export default RegisterFormComponent;