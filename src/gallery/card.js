import React from 'react';
import PropTypes from 'prop-types';

const card = ({image}) => {
    return (
        <div className="col-md-3 col-sm-12 gallery-img my-2">
            <img src={image} alt=""/>
        </div>
    )
}

card.propTypes = {

}

export default card
