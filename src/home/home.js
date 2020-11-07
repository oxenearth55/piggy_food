import React from 'react';
import Layout from '../layout';
// ANCHOR Components 
import Blog from './blog';
import Intro from './intro';
import Categories from './categories';

const home = () => (
    <Layout>    
        {/* ANCHOR Components */}
        <Intro/> 
        <Blog/>
        <Categories/>
        {/* ANCHOR Conponents */}
    </Layout>
)
export default home; 