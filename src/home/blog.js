import React from 'react';
import PropTypes from 'prop-types';
import about from '../food_images/about.jpg';
//ANCHOR image 
import salmon from '../food_images/salmon2.jpg';
import chicken from '../food_images/chicken1.jpg'
import salad6 from '../food_images/salad6.jpg';
import salad2 from '../food_images/salad2.jpg';
import salad5 from '../food_images/salad5.jpg';
import macaroni1 from '../food_images/macaroni1.jpg';
import steak2 from '../food_images/steak2.jpg';
import tofu2 from '../photo/food/tofu2.jpg';
import shrimp_pancake from '../photo/food/shrimp_pancake.jpg';
import deep_fired_crab4 from '../photo/food/deep_fired_crab4.jpg';
import fried_pork from '../photo/food/fried_pork.jpg';
import stuffed_squid3 from '../photo/food/stuffed_squid3.jpg';
import green_curry from '../photo/food/green_curry.jpg';
import unknow from '../photo/food/unknow.jpg';
import unknow2 from '../photo/food/unknow2.jpg';










const blog = props => {
    return (
        <div className="featured">
            <div className="sidebar">
                <div className="about">
                    <h2>About <span>Us</span></h2>
                    <img src={about}/>
                    <p className="uppercase">Hi, everyone! Welcome to YummyFood Blog.</p>
                    <p>Lorem ipsum dolor sit amet, cinsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Utenim ad minim veniam, quis nostrid exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                </div>
                <div className="featured_posts">
                    <h2>Featured <span>Posts</span></h2>

                    <div className="post">
                        <div className="calendar px-2"><p>16<span>May</span></p></div>
                        <div className="dish">
                            <h6>Dinner</h6>
                            <h1>Steamed Alaska King Crab</h1>
                            <p>Lorem ipsum dolor sit amet, cinsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua.
                            </p>
                        </div>
                    </div>

                    <div className="post">
                        <div className="calendar px-2"><p>07<span>Apr</span></p></div>
                        <div className="dish">
                            <h6>Dinner</h6>
                            <h1>Roasted Peking Duck</h1>
                            <p>Lorem ipsum dolor sit amet, cinsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua.
                            </p>
                        </div>
                    </div>

                    <div className="post">
                        <div className="calendar px-2"><p>24<span>Jan</span></p></div>
                        <div className="dish">
                            <h6>Lunch</h6>
                            <h1>Taiyaki Gastro Tousled Brancho</h1>
                            <p>Lorem ipsum dolor sit amet, cinsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua.
                            </p>
                        </div>
                    </div>

                    <div className="post">
                        <div className="calendar px-2"><p>12<span>Sep</span></p></div>
                        <div className="dish">
                            <h6>Breakfast</h6>
                            <h1>Batch Squid Jean Shorts</h1>
                            <p>Lorem ipsum dolor sit amet, cinsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="recipe_type">
                    <h2>Category of <span>Recipes</span></h2>
                    <div className="main_type"><a href="#">Chicken<span>214</span></a></div>
                    <div className="main_type"><a href="#">Steak<span>33</span></a></div>
                    <div className="main_type"><a href="#">Trotter<span>75</span></a></div>
                    <div className="main_type"><a href="#" >Salad<span>42</span></a></div>
                    <div className="sub_type"><a href="#">Fresh Cucumber<span>28</span></a></div>
                    <div className="sub_type"><a href="#">High Fiber<span>45</span></a></div>
                    <div className="sub_type"><a href="#">Vitamin Rich<span>52</span></a></div>
                    <div className="main_type"><a href="#">Pastry<span>83</span></a></div>

                </div>

                <div className="subscribe">
                    <div className="filter"></div>
                    <h2>Get <span>Newsletters</span></h2>
                    <div className="poster">
                        <p>Subscribe to our newsletter and get our newest updates right on your inbox.</p>
                        <input type="text" placeholder="Enter your email address"/>
                        <button>Subscribe</button>
                    </div>
                </div>

            </div>

            <div className="featured_post">
                <div className="date">
                    <p>16<span>Jul</span></p>
                </div>
                <img src={deep_fired_crab4}/>
                <div className="tag"><p>Asian <span></span>Lunch</p></div>
                <h1>Amazing Shrimp Rice Noodle with Enriching Broth</h1>
                <h6>Posted on 16th July by <span>Rachel</span></h6>
                <p>Shrimp is such an easy, fast, versatile and delicious option for flavor-packed lunches and 
                    dinners. It’s a great seafood canvas on which to build flavors and textures, and this is why 
                    I always keep some shrimp in the freezer as a contingency plan.</p>
                    <a href="#" className="button">Get Recipe</a>
            </div>
            
            <div className="selected_posts">
                <img src={stuffed_squid3}/>
                <div className="description">
                    <div className="tag"><p>Lunch <span>Asian</span></p></div>
                    <h1>Teriyaki Chicken Salad with Sour Lemon</h1>
                    <p>hrimp is such an easy, fast, versatile and delicious option for flavor-packed lunches and 
                    dinners. It’s a great seafood canvas on which to build flavors and textures, and this is why 
                    I always keep some shrimp in the freezer as a contingency plan</p>
                </div>

                <img src={unknow}/>
                <div className="description">
                    <div className="tag"><p>Lunch <span>Asian</span></p></div>
                    <h1>Thai Fragrant Rice</h1>
                    <p>hrimp is such an easy, fast, versatile and delicious option for flavor-packed lunches and 
                    dinners. It’s a great seafood canvas on which to build flavors and textures, and this is why 
                    I always keep some shrimp in the freezer as a contingency plan</p>
                </div>

                <div className="comment">
                    <div className="quotation">
                        <p>hrimp is such an easy, fast, versatile and delicious option for flavor-packed lunches</p>
                        <h6>Piggy Pink</h6>
                    </div>  
                </div>

                <img src={unknow2}/>
                <div className="description">
                    <div className="tag"><p>Lunch <span>Asian</span></p></div>
                    <h1>Teriyaki Chicken Salad with Sour Lemon</h1>
                    <p>hrimp is such an easy, fast, versatile and delicious option for flavor-packed lunches and 
                    dinners. It’s a great seafood canvas on which to build flavors and textures, and this is why 
                    I always keep some shrimp in the freezer as a contingency plan</p>
                </div>
            </div>

         


            <div className="selected_posts">
                <img src={fried_pork}/>
                <div className="description">
                    <div className="tag"><p>Lunch <span>Asian</span></p></div>
                    <h1>Shrimp Pancake</h1>
                    <p>hrimp is such an easy, fast, versatile and delicious option for flavor-packed lunches and 
                    dinners. It’s a great seafood canvas on which to build flavors and textures, and this is why 
                    I always keep some shrimp in the freezer as a contingency plan</p>
                </div>

                <img src={tofu2}/>
                <div className="description">
                    <div className="tag"><p>Lunch <span>Asian</span></p></div>
                    <h1>Macaroni with Italian Tomato Sauce</h1>
                    <p>hrimp is such an easy, fast, versatile and delicious option for flavor-packed lunches and 
                    dinners. It’s a great seafood canvas on which to build flavors and textures, and this is why 
                    I always keep some shrimp in the freezer as a contingency plan</p>
                </div>

                <img src={green_curry}/>
                <div className="description">
                    <div className="tag"><p>Lunch <span>Asian</span></p></div>
                    <h1>Steak chicken fry</h1>
                    <p>hrimp is such an easy, fast, versatile and delicious option for flavor-packed lunches and 
                    dinners. It’s a great seafood canvas on which to build flavors and textures, and this is why 
                    I always keep some shrimp in the freezer as a contingency plan</p>
                </div>
            </div>

            <div className="load_more">
                <a href="#" className="tag">Load More</a>
            </div>

        </div>

        
    )
}

blog.propTypes = {

}

export default blog
