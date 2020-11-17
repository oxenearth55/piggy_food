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
import { Divider } from '@material-ui/core';



const Gallery = () => {

 

  const [type, setType] = useState('all');

    return (

    <Layout>
      <div className ="container mb-5 gallery">
        <div className="d-flex justify-content-center mb-3 gallery-heading fix-bg">
        <h1 className="text-center font-champagne ">
          My Foods Gallery</h1>
        </div>
      {/* SECTION Filter Tab */}
      <div className="d-flex justify-content-center mt-5 filter-tab ">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item">
            <div class="nav-link active" id="pills-home-tab" data-toggle="pill" onClick={()=>setType('all')}   role="tab" aria-controls="pills-home" aria-selected="true">All</div>
          </li>
          <li class="nav-item">
            <div class="nav-link" id="pills-profile-tab" data-toggle="pill" onClick={()=>setType('curry')}  role="tab" aria-controls="pills-profile" aria-selected="false">Curry</div>
          </li>

          <li class="nav-item">
            <div class="nav-link" id="pills-profile-tab" data-toggle="pill" onClick={()=>setType('soup')}  role="tab" aria-controls="pills-profile" aria-selected="false">Soup</div>
          </li>


          <li class="nav-item">
            <div class="nav-link" id="pills-profile-tab" data-toggle="pill" onClick={()=>setType('salad')}  role="tab" aria-controls="pills-profile" aria-selected="false">Salad</div>
          </li>
        
          <li class="nav-item">
            <div class="nav-link" id="pills-profile-tab" data-toggle="pill" onClick={()=>setType('fried')}  role="tab" aria-controls="pills-profile" aria-selected="false">Fried</div>
          </li>  
          <li class="nav-item">
            <div class="nav-link" id="pills-profile-tab" data-toggle="pill" onClick={()=>setType('stir_fried')}  role="tab" aria-controls="pills-profile" aria-selected="false">Stir Fried</div>
          </li>  
          <li class="nav-item">
            <div class="nav-link" id="pills-profile-tab" data-toggle="pill" onClick={()=>setType('grilled')}  role="tab" aria-controls="pills-profile" aria-selected="false">Grilled</div>
          </li>  
          <li class="nav-item">
            <div class="nav-link" id="pills-profile-tab" data-toggle="pill" onClick={()=>setType('steamed')}  role="tab" aria-controls="pills-profile" aria-selected="false">Steamed</div>
          </li>  
          <li class="nav-item">
            <div class="nav-link" id="pills-profile-tab" data-toggle="pill" onClick={()=>setType('paste')}  role="tab" aria-controls="pills-profile" aria-selected="false">Paste</div>
          </li>  
        </ul>
      </div>
      

        <div className="row mt-4 justify-content-center">
          {food_details.map(food => ( type == 'all' ?
            <Card key={food.id} image={food.image} name={food.name} id={food.id}/> 
            : food.type == type && <Card key={food.id} image={food.image} name={food.name} id={food.id}/>
          ))}        
        </div>
      </div>
    </Layout>

       
        
    )
}

Gallery.propTypes = {

}

export default Gallery;
