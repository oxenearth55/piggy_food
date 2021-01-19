import React from 'react'
import Layout from '../layout'
// Components
import Gallery from './Gallery'
import Description from './Description'
import Intro1 from './Intro1'
// CSS
import './gallery.css'
import './description.css'
import './intro1.css'


const Demo = () => {
    return (
        <Layout>
            <div className='container-fluid p-0 my-5'>
                <div className="col-12 text-center">
                    <h4>Theme Gallery</h4>
                </div>
                <Gallery/>

                <div className="col-12 text-center my-5">
                    <h4>Theme Desctiption</h4>
                </div>
                <Description/>

                <div className="col-12 text-center my-5">
                    <h4>Theme Intro1</h4>
                </div>
                <Intro1/>                
            </div>
        </Layout>
    )
}

export default Demo
