import React, {
    FC,
    useEffect,
    useState
} from 'react';
import './App.css';
import UserComponent from './components/userComponent'
import IUserModel
    from "./models/userModel";
import {
    getUsers
} from "./servises/users.api.service";


const App:FC = () => {

    const [users,setUsers    ]=useState<IUserModel[]>([])
    useEffect(() => {
        getUsers().then(value => {setUsers(value.data)})

        return ()=> {
            console.log(users)
        }
    }, []);
  return (
      <>
          {
              users.map(({id, lastName, firstName}, index)=><UserComponent key={index} id={id} lastName={lastName} firstName={firstName}/>)
          }
      </>
  );
};

export default App;