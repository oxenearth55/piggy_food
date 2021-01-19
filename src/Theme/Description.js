import React from 'react'
//Photo
import pic1 from '../photo/food/tofu.jpg'
import pic2 from '../photo/food/tomyum.jpg'
import pic3 from '../photo/food/food.jpg'
import pic4 from '../photo/food/hoomok.jpg'

const Description = () => {
    return (
        <div className="description-theme">
            {/* SECTION Row1  */}
            <div className="pic">
                <img src={pic1} alt=""/>

            </div>

            <div className="content">
                <div className="text-area">
                    <h3>Head</h3>
                    <p>content</p>
                </div>

            </div>

            <div className="pic2">
                <img src={pic2} alt=""/>

            </div>

            <div className="content">
                <div className="text-area">
                    <h3>Head</h3>
                    <p>content</p>
                </div>

            </div>
            {/* SECTION Row2 */}
             <div className="content">
                <div className="text-area">
                    <h3>Head</h3>
                    <p>content</p>
                </div>

            </div>
            <div className="pic3">
                <img src={pic3} alt=""/>

            </div>
            <div className="content">
                <div className="text-area">
                    <h3>Head</h3>
                    <p>contentcontentcontentcontentcontentcontententcontentcontent
                    contentcontentcontentcontentcontentcontent
                    contentcontentcontentcontent
                    contentcontentcontentcontentcontentcontent
                    </p>
                </div>

            </div>
            <div className="pic4">
                <img src={pic4} alt=""/>
            </div>




            
        </div>
    )
}



export default Description
