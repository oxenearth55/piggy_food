import React from 'react';
// ANCHOR image 
import bacon from '../food_images/bacon1.jpg';
import salad from '../food_images/salad1.jpg';
import steak from '../food_images/steak1.jpg';
import cake from '../food_images/cake1.jpg';
import hoomok from '../photo/food/hoomok.jpg';
import tomyum9 from '../photo/food/tomyum9.jpg';
import crab_curry2 from '../photo/food/crab_curry2.jpg';
import fired_rice3 from '../photo/food/fired_rice3.jpg';
import deep_fired_crab from '../photo/food/deep_fired_crab3.jpg';







const intro = props => {
    return (
        <div className="cover">

            {/* SECTION Feature1 */}
            <div className="feature">
                <img src={crab_curry2}/>
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
                <img src={tomyum9}/>
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
                <img src={fired_rice3}/>
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
                <img src={hoomok}/>
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
