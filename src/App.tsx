import React, { FC } from 'react';
import './App.css';
import ToggleComponent from "./components/ToggleComponent";
import PreviousComponent
    from "./components/PreviousComponent";
import StorageComponent
    from "./components/StorageComponent";

const App: FC = () => {
    return (
        <main>
            <ToggleComponent/>
            <PreviousComponent/>
            <StorageComponent/>
        </main>
    );
};

export default App;