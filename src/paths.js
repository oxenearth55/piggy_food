import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './home/home';
import Gallery from './gallery/Gallery';

const paths = () => {
    return(
        <BrowserRouter>

            <Switch>
            <Route path="/"  exact component= {Home}/>
            <Route path="/gallery" exact component= {Gallery}/>

            </Switch>

        </BrowserRouter>


    );

}

export default paths;