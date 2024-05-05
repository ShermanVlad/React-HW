import React, {
    FC,
    useState
} from 'react';
import UsersComponent
    from './components/User/usersComponent';
import PostsComponent
    from "./components/Post/postsComponent";
import "./App.css"

const App: FC = () => {
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

    return (
        <div className={"AppDiv"}>
            <UsersComponent
                userId={setSelectedUserId}/>
            {selectedUserId !== null &&
                <PostsComponent
                    userId={selectedUserId}/>}

        </div>
    );
}

export default App;