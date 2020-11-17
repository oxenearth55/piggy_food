import React, { useEffect, useState } from 'react';
import Layout from '../layout';
import PropTypes from 'prop-types';
import { food_details } from '../gallery/food_info';

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
            <div>
                <div className="d-flex justify-content-center mb-3 food-header fix-bg"        
                style={{
                    backgroundImage: 'url('+food.image+')'         
                }}     
                >
                    <h1 className="text-center font-champagne ">
                    {food.name} </h1>
                </div>        
                <div className="container my-5">
                    <div className="row">
                        <div className="col-6 text-center">
                            <img src={food.image}   style={{
                        width:'80%'         
                    }}     />
                        </div>
                        <div className="col-6 text-cente mt-5 ">
                            {food.description}
                        </div>
                    </div>
                </div>
                
            </div>
        </Layout>
     
    )
}

Main.propTypes = {

}

export default Main;
