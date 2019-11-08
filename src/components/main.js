import React from 'react';
import MainPage from './mainPage';
import Drivers from './drivers';
import Tracks from './tracks';
import About from './about';
import {Switch ,Route} from 'react-router-dom';
import InfoNews from './infonews';

const Main = () => (
    <Switch>
        <Route exact path="/mainpage" component={MainPage}/>
        <Route path="/drivers" component={Drivers}/>
        <Route path="/tracks" component={Tracks}/>
        <Route path="/about" component={About}/>
        <Route path="/infonews" component={InfoNews}/>
    </Switch>
)

export default Main;