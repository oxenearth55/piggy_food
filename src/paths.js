import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './home/home';
import Gallery from './gallery/Gallery';
import Food_detail from './food_detail/Main';

//NOTE Test theme 
import Demo from  './Theme/Demo';

const paths = () => {
    return(
        <BrowserRouter>

            <Switch>
            <Route path="/"  exact component= {Home}/>
            <Route path="/gallery" exact component= {Gallery}/>
            <Route path="/:name/:id" exact component= {Food_detail}/>
            <Route path="/demo" exact component= {Demo}/>



            </Switch>

        </BrowserRouter>


    );

}

export default paths;