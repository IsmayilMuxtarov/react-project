import React, {Component} from 'react';
import {Link} from "react-router-dom";

import "./investmentPlans.scss"


class investmentPlans extends Component {
    state = {
        activeYesButton: false,
    };


    render() {
                return (
                <div className = "plans"> 
                    <div className = "plans-top"> 
                        <p className = "plans-top-step">  
                            STEP 2 OF 3
                        </p>
                        <p className = "plans-top-lost">  
                            Lost or have trouble?  <a href="#" className = "plans-top-help">Get help</a>
                        </p>
                    </div>
                    <div className = "plans-content"> 
                       <div className = "plans-content-titles">  
                            <h1 className = "plans-content-titles-main">Investment plans</h1>
                            <p className = "plans-content-titles-text">Let us know about your investment plans. This will help us get you to the right expert who will help you further</p>
                        </div>
                        <div className = "plans-content-top">
                            <h2 className = "plans-content-top-title">Ho much are you planning to invest in this year?</h2>
                            <div className = "plans-content-top-div">
                                <label className = "plans-content-top-div-label" for="from">From</label>
                                <input className = "plans-content-top-div-input" type="number" id="from" name="from"/>
                                <p className = "plans-content-top-div-inputDollar">$</p>
                            </div>
                            <div className = "plans-content-top-div">
                                <label className = "plans-content-top-div-label" for="to">To</label>
                                <input className = "plans-content-top-div-input" type="number" id="to" name="to"/>
                                <p className = "plans-content-top-div-inputDollar">$</p>
                            </div>
                        </div>
                        <div className = "plans-content-bottom">
                            <h2 className = "plans-content-bottom-title">Are you an accredited investor?</h2>

                            <div className = "plans-content-bottom-buttons">
                                <div onClick={() => this.setState({activeYesButton: true})} className = { this.state.activeYesButton? "plans-content-bottom-buttons-singleButton plans-content-bottom-buttons-active" : "plans-content-bottom-buttons-singleButton plans-content-bottom-buttons-disactive"}>
                                
                                {
                                    this.state.activeYesButton?
                                    <div className = "plans-content-bottom-buttons-singleButton-checkboxActive">
                                        <div className = "plans-content-bottom-buttons-singleButton-checkboxActive-round">
                                        </div>
                                    </div>
                                    :
                                    <div className = "plans-content-bottom-buttons-singleButton-checkboxDisactive">
                                    </div>
                                }
                                
                                    <span className = "plans-content-bottom-buttons-singleButton-text">Yes</span>
                                </div>
                                
                                <div onClick={() => this.setState({activeYesButton: false})} className = { !this.state.activeYesButton? "plans-content-bottom-buttons-singleButton plans-content-bottom-buttons-active" : "plans-content-bottom-buttons-singleButton plans-content-bottom-buttons-disactive"}>
                                    {
                                        !this.state.activeYesButton?
                                        <div className = "plans-content-bottom-buttons-singleButton-checkboxActive">
                                            <div className = "plans-content-bottom-buttons-singleButton-checkboxActive-round">
                                            </div>
                                        </div>
                                        :
                                        <div className = "plans-content-bottom-buttons-singleButton-checkboxDisactive">
                                        </div>
                                    }
                                    <span className = "plans-content-bottom-buttons-singleButton-text">No</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "plans-bottom">  
                           <a href="#" className = "plans-bottom-link">Back to the homepage</a>
                           <div className = "plans-bottom-buttons">
                                <div className = "plans-bottom-buttons-skip">
                                    Skip for now
                                </div>
                                <Link to="/pref" className = "plans-bottom-buttons-next">
                                    Next step
                                </Link>
                           </div>
                    </div>
                </div>
        );
    }
}

export default investmentPlans;