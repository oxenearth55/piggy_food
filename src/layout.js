import React from 'react';
import Menu from './menu_footer/menu';
import Cover from './Components/cover';


const layout = ({children}) => (
    <div className = 'container-fluid mx-0 px-0'>
        <Menu/>
        <div className='row'>  
            {children}
        </div>
    </div>
);

export default layout; 