import React from 'react';
import PropTypes from 'prop-types';

const about = ({image, description}) => {
    return (
        
               <div className="container my-5 border-top border-bottom">
                    <div className="row my-5">
                        <div className="col-md-6 col-sm-12 text-center">
                            <img src={image}   style={{
                        width:'80%'         
                    }}     />
                        </div>
                        <div className="col-md-6 col-sm-12 mt-5 ">
                            <h1 className="font-champagne  text-center">About this Food <i class="fas fa-utensils mx-2 red-color"  style={{color:"orange"}}></i></h1>
                            <div className="content-font">{description}</div>
                        </div>
                    </div>
                </div>
            
        
    )
}

about.propTypes = {

}

export default about;
