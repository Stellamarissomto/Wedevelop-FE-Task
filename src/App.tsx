import React from 'react';
import { Route } from 'react-router-dom';
import Explore from "./pages/Explore/explore"

const App: React.FC = () => (
    <>
        <Route exact path="/" component={Explore} />

    </>
);

export default App;