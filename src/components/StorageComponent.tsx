import React
    , {
    useState
} from 'react';
import useStorage
    from "../hooks/useStorage";
import styles from "../modules/Storage.module.css"

const StorageComponent = () => {

   const [valueForm, setValueForm] = useState<string>('')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueForm(event.target.value);
    };

    const [setToLS]=useStorage(valueForm);
    const setToLSCallback=():void=>{
        setToLS()
    }
    const handleSubmit  = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Введені дані:', valueForm);
        setToLSCallback()
    };


return (

    <div className={styles.storage}>
        <form
            onSubmit={handleSubmit}>
            <input
                type="number"
                value={valueForm}
                onChange={handleInputChange}/>
            <button

                type={"submit"}>Confirm
            </button>
        </form>
    </div>
)
};

export default StorageComponent;