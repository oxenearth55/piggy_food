import React from 'react';
import PropTypes from 'prop-types';

const newletter = props => {
    return (
        <div className="newsletter">
            <div className="newsletter_filter"></div>
            <div className="action_call">
                <h2>Sign up for Newsletter</h2>
                <input type="text" placeholder="Enter your email address"/>
                <button>Send Message</button>
            </div>       
        </div>
    )
}

newletter.propTypes = {

}

export default newletter;
