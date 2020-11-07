import React from 'react';
// ANCHOR image
import salad3 from '../food_images/salad3.jpg'; 
import pizza1 from '../food_images/pizza1.jpg';
import steak2 from '../food_images/steak2.jpg';
import cake2 from '../food_images/cake2.jpg';


const categories = props => {
    return (
        <div className="categories">

            {/* SECTION Category 1 */}
            <div className="card_category">
                <img src={salad3}/>
                <div className="desc_category">
                    <h2>Breakfast Meals</h2>
                    <p><a href="#" className="recipe_btn">104 Recipes</a></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.</p>
                    <a href="#" className="button">Learn More</a>
                </div>
            </div>

             {/* SECTION Category 2 */}
             <div className="card_category">
                <img src={pizza1}/>
                <div className="desc_category">
                    <h2>Lunch Meals</h2>
                    <p><a href="#" className="recipe_btn">104 Recipes</a></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.</p>
                    <a href="#" className="button">Learn More</a>
                </div>
            </div>

             {/* SECTION Category 3 */}
             <div className="card_category">
                <img src={steak2}/>
                <div className="desc_category">
                    <h2>Dinner Meals</h2>
                    <p><a href="#" className="recipe_btn">104 Recipes</a></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.</p>
                    <a href="#" className="button">Learn More</a>
                </div>
            </div>

             {/* SECTION Category 4 */}
             <div className="card_category">
                <img src={cake2}/>
                <div className="desc_category">
                    <h2>Desserts Meals</h2>
                    <p><a href="#" className="recipe_btn">104 Recipes</a></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.</p>
                    <a href="#" className="button">Learn More</a>
                </div>
            </div>

            
        </div>
    )
}

export default categories;
