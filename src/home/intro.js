import React from 'react';
// ANCHOR image 
import bacon from '../food_images/bacon1.jpg';
import salad from '../food_images/salad1.jpg';
import steak from '../food_images/steak1.jpg';
import cake from '../food_images/cake1.jpg';



const intro = props => {
    return (
        <div className="cover">

            {/* SECTION Feature1 */}
            <div className="feature">
                <img src={bacon}/>
                <div className="title_filter"></div>
                <div className="feature_title">
                    <div className="date">
                        <div className="date_filter"></div>
                        <h3>14<span>June</span></h3>
                    </div>
                    <p>by <a href="#">Brandon</a><span></span> Breakfast Meal <span></span> <a href="#">213 Upvotes</a> </p>
                    <h1>Baked Bacon with Lemon Rosemary</h1>
                </div>           
            </div>

            {/* SECTION feature2 */}
            <div className="feature">
                <img src={salad}/>
                <div className="title_filter"></div>
                <div className="feature_title">
                    <div className="date">
                        <div className="date_filter"></div>
                        <h3>21<span>Mar</span></h3>
                    </div>
                    <p>by <a href="#">Brandon</a><span></span> Breakfast Meal <span></span> <a href="#">172 Upvotes</a> </p>
                    <h1>Egg Salad with Fresh Cucumber</h1>
                </div>           
            </div>

            {/* SECTION Feature3 */}
            <div className="feature">
                <img src={steak}/>
                <div className="title_filter"></div>
                <div className="feature_title">
                    <div className="date">
                        <div className="date_filter"></div>
                        <h3>04<span>Dec</span></h3>
                        </div>
                    <p>by <a href="#">Rachel</a><span></span> Dinner Meal <span></span> <a href="#">125 Upvotes</a> </p>
                    <h1>Baked Bacon with Lemon Rosemary</h1>
                </div>         
            </div>

            {/* SECTION Feature4 */}
            <div className="feature">
                <img src={cake}/>
                <div className="title_filter"></div>
                <div className="feature_title">
                    <div className="date">
                        <div className="date_filter"></div>
                        <h3>19<span>Apr</span></h3>
                    </div>
                    <p>by <a href="#">Brandon</a><span></span> Dessert Meal <span></span> <a href="#">213 Upvotes</a> </p>
                    <h1>Chocolate Cake with Almond Nuts</h1>
                </div>         
            </div>
        </div>
            
    )
}
export default intro;
