import React, { useEffect, useState, Fragment } from 'react';
import Layout from '../layout';
import PropTypes from 'prop-types';
import { food_details } from '../gallery/food_info';
// ANCHOR Components 
import Header from './header';
import About from './about';

const Main = (props) => {
    const [food, setFood] = useState({});
    useEffect(() => {
        const food_id = props.match.params.id;
        //NOTE index of food -1 
        const thisFood = food_details[food_id-1];
        setFood(thisFood);

    },[props])
    return (
        <Layout>
            <Fragment>        
                <Header name={food.name} image={food.image}/>
                <About image={food.image} description={food.description}/>       
            </Fragment>
        </Layout>
     
    )
}

Main.propTypes = {

}

export default Main;
