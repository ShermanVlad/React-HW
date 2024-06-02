import React, {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import {AuthDataModel} from "../models/AuthDataModel";
import {authService} from "../services/api.services";

const FormComponent: FC = () => {

    const {handleSubmit, register} = useForm<AuthDataModel>();

    const [isAuthState, setIsAuthState] = useState<boolean>(false)
    
    const authenticate= async (formData: AuthDataModel)=>{
        const isAuth = await authService.authentication(formData);
        setIsAuthState(isAuth)
    };
    return (
        <div>
            <form onSubmit={handleSubmit(authenticate)}>
                <h3>Login</h3>
                { isAuthState? <div>You are logged in</div>: <div>You need to login</div>}
                <input type="text" {...register('username')} defaultValue={'Sherman'}/>
                <input type="text" {...register('password')} defaultValue={'Sherman1@'}/>
                <button>login</button>
            </form>
        </div>
    );
};

export default FormComponent;