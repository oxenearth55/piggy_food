import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const card = ({image, name, id}) => {
    return (
        <div className="col-md-3 col-sm-12 gallery-img my-2 card-gallery mx-2 ">
            <div className="card-title-filters">
                <Link to={`/${name}/${id}`} >
                <img src={image} alt=""/>       
                <div class="overlay">
                <div class="text">{name}</div>
            </div>  
                </Link>
            </div>
       
        </div>
    )
}

card.propTypes = {

}

export default card
