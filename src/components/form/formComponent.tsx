import React
    , {
    FC
} from 'react';
import {
    useForm
} from "react-hook-form";
import {
    joiResolver
} from "@hookform/resolvers/joi";
import postValidator
    from "../../validators/postValidator";

import styles from "./formBody.module.css"
import {
    poster
} from "../../services/post.api.service";
 export interface IFormProps {
    userId: number,
    title: string,
    body: string
}

const FormComponent: FC = () => {
    let {
        handleSubmit,
        register,
        formState: {
            errors,
            isValid
        }
    } = useForm<IFormProps>({
        mode: "all",
        resolver: joiResolver(postValidator)
    })

    function customHandler(data: IFormProps) {
        console.log('Your data is posted in JSONPlaceholder');
        poster(data).then()
    }

    return (
        <div>
            <form className={styles.formBody}
                onSubmit={handleSubmit(customHandler)}>
                <label>
                    <input
                        type='text' {...register('userId')}/>
                    {errors.userId &&
                        <div>{errors.userId.message}</div>}
                </label>

                <label>
                    <input
                        type='text' {...register('title')}/>
                    {errors.title &&
                        <div>{errors.title.message}</div>}
                </label>

                <label>
                    <input
                        type='text' {...register('body')}/>
                    {errors.body &&
                        <div>{errors.body.message}</div>}
                </label>
                <button disabled={!isValid}>Post</button>
            </form>
        </div>
    );
};

export default FormComponent;