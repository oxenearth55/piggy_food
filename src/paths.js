import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './home/home';

const paths = () => {
    return(
        <BrowserRouter>

            <Switch>
            <Route path="/"  exact component={Home}></Route>

            </Switch>

        </BrowserRouter>


    );

}

export default paths;