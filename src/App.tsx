import React from 'react';
import { Route } from 'react-router-dom';
import Explore from "./pages/Explore/explore";
import Favorite from './pages/favourite/'

const App: React.FC = () => (
    <>
        <Route exact path="/" component={Explore} />
        <Route exact path="/favorite" component={Favorite} />

    </>
);

export default App;