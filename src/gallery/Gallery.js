import React, { useEffect, useState, Suspense } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from '../layout';
import { food_details } from './food_info';
// ANCHOR Components
import Card from './card';
// ANCHOR Images
import salmon from '../food_images/salmon2.jpg';
import chicken from '../food_images/chicken1.jpg'
import salad6 from '../food_images/salad6.jpg';
import salad2 from '../food_images/salad2.jpg';
import salad5 from '../food_images/salad5.jpg';
import macaroni1 from '../food_images/macaroni1.jpg';
import steak2 from '../food_images/steak2.jpg';



const Gallery = () => {

 

  const [food, setFood] = useState('');

  useEffect(() => {
    setFood(food_details[0]);

  },[setFood]);


    return (

    <Layout>
      <div className ="container mb-5 gallery">
        <div className="d-flex justify-content-center my-5 gallery-heading fix-bg">
        <h1 className="text-center font-champagne ">
          My Foods Gallery</h1>
        </div>
        <div className="row">
          {food_details.map(food => (
            <Card key={food.id} image={food.image}/>
          ))}        
        </div>
      </div>
    </Layout>

       
        
    )
}

Gallery.propTypes = {

}

export default Gallery;
