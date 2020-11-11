import React from 'react';
import Menu from './menu_footer/menu';
import Footer from './menu_footer/footer';


const layout = ({children}) => (
    <div className="container-fluid" >
        <Menu/>
        <div className='row'>  
            {children}
        </div>
        <Footer/>
    </div>
);

export default layout; 