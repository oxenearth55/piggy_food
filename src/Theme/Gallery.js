import React from 'react'
//Photo 
import pic1 from '../photo/food/tofu.jpg'
import pic2 from '../photo/food/tomyum.jpg'
import pic3 from '../photo/food/tofu2.jpg'
import pic4 from '../photo/food/hoomok.jpg'
import pic5 from '../photo/food/food.jpg'
import pic6 from '../photo/food/crab_curry.jpg'


const Gallery = () => {
    return (

        <div className="gallery-theme">
            <div className="pic1">
                <img src={pic1} alt=""/>
            </div>
            <div className="pic2">
                <img src={pic2} alt=""/>
            </div>
            <div className="pic3">
                <img src={pic3} alt=""/>
            </div>

            <div className="pic4">
                <img src={pic4} alt=""/>
            </div>
            <div className="pic5">
                <img src={pic5} alt=""/>
            </div>
            <div className="pic6">
                <img src={pic6} alt=""/>
            </div>
            
        </div>

    )
}

export default Gallery
