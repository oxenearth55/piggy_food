import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../photo/menu/menu.png';
//SECTION image
import facebook from '../icons/facebook.svg';
import youtube from '../icons/youtube.svg'; 
import instagram from '../icons/instagram.svg'
import twitter from '../icons/twitter.svg'



const menu = () => {
 
return(
  <nav>
    <div className='social_icons'>
      <a href="#"><img src={facebook}/></a>
      <a href="#"><img src={twitter}/></a>
      <a href="#"><img src={youtube}/></a>
      <a href="#"><img src={instagram}/></a>
    </div>

    <div className="brand_logo">
      <a href="#"><h1>Piggyfood <span>blog</span></h1></a>
    </div>

    <div className="subscribe_btn"><a href="#">Subscribes</a></div>

    <div className="nav_bar">
      <Link to="/" className="active">Home Page</Link>
      <Link to="/">Blog Entries</Link>
      <Link to="/">Food Gallery</Link>
      <Link to="/">Contact Us</Link>
      <div className="line"></div>
    </div>

  </nav>  
);
}

export default menu; 