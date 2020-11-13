import React from 'react';
import PropTypes from 'prop-types';

const card = ({image}) => {
    return (
        <div className="col-3 gallery-img">
            <img src={image} alt=""/>
        </div>
    )
}

card.propTypes = {

}

export default card
