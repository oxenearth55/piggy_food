import React from 'react';
import PropTypes from 'prop-types';

const header = ({name, image}) => {
    return (
        <div className="d-flex justify-content-center mb-3 food-header fix-bg"        
            style={{
                backgroundImage: 'url('+image+')'         
            }}     
            >
            <h1 className="text-center font-champagne ">
                {name} </h1>
        </div>     
    )
}

header.propTypes = {

}

export default header;
