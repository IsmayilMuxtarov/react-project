import React, {Component} from 'react';
import {Link} from "react-router-dom";

import "./contactDetails.scss"

class contactDetails extends Component {
    state = {
    };


    render() {
            return (
                <div className = "details">	
                	<div className = "details-top">	
                		<p className = "details-top-step">	
                			STEP 1 OF 3
                		</p>
                		<p className = "details-top-lost">	
                			Lost or have trouble?  <a href="#" className = "details-top-help">Get help</a>
                		</p>
                	</div>
                	<div className = "details-content">	
                	   <div className = "details-content-titles">  
                            <h1 className = "details-content-titles-main">Contact details</h1>
                            <p className = "details-content-titles-text">Welcome to United Properties, we are glad to see you! Let’s get started by letting us know a little bit about you</p>
                        </div>
                        <div className = "details-content-form">
                            <div className = "details-content-form-div details-content-form-div50">
                                <label className = "details-content-form-div-label" for="fullName">Full name</label>
                                <input className = "details-content-form-div-input" type="text" id="fullName" name="fullName"/>
                            </div>
                            <div className = "details-content-form-div details-content-form-div50 details-content-form-divSingleInput">
                                <input className = "details-content-form-div-input" type="text" id="fullName" name="fullName"/>
                            </div>
                            <div className = "details-content-form-div details-content-form-div100">
                                <label className = "details-content-form-div-label" for="email">E-mail address</label>
                                <input className = "details-content-form-div-input" type="email" id="email" name="email"/>
                            </div>
                            <div className = "details-content-form-div details-content-form-div100">
                                <label className = "details-content-form-div-label" for="countr">Country</label>
                                <input className = "details-content-form-div-input" type="text" id="countr" name="countr"/>
                            </div>
                        </div>
                        <div className = "details-content-policy">
                            <h3 className = "details-content-policy-main">Privacy policy</h3>
                            <p className = "details-content-policy-text">We know you care about how your personal information is used and shared, so we take your privacy seriously</p>
                            <a className = "details-content-policy-link" href="#">Expand privacy policy</a>
                        </div>
                	</div>
                	<div className = "details-bottom">	
                	       <a href="#" className = "details-bottom-link">Back to the homepage</a>
                           <div className = "details-bottom-buttons">
                                <div className = "details-bottom-buttons-skip">
                                    Skip for now
                                </div>
                                <Link to="/plans" className = "details-bottom-buttons-next">
                                    Next step
                                </Link>
                           </div>
                	</div>
                </div>
        );
    }
}

export default contactDetails;