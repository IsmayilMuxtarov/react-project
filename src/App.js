import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";

import './App.scss'
import './components/leftSideBar/leftSideBar.scss'

// Components
import contactDetails from './components/contactDetails/contactDetails';
import investmentPlans from './components/investmentPlans/investmentPlans';
import investmentPref from './components/investmentPref/investmentPref';
// import {leftSideBar} from './components/leftSideBar/leftSideBar';

// Images
import activeBox from './img/Rectangle.png'; 
import activeBoxInner from './img/rectangle-inner.png'; 
import deactiveBox from './img/deactiveRectangle.png'; 
import quoteIcon from './img/quoteIcon.png'; 
import up from './img/up.png'; 


class App extends Component {
    state = {
        activeScreen: "details"
    };


    render() {

        const isDetailsScreen = this.state.activeScreen = "details",
        isPlansScreen = this.state.activeScreen = "plans",
        isPrefScreen = this.state.activeScreen = "pref";
                return (
                        <div className='app'>
                            <div className="left-sidebar">
                                <div className="left-sidebar-top">
                                    <h3 className="left-sidebar-top-text">UNITED<span className="left-sidebar-top-lightText">PROPERTIES</span></h3>
                                </div>
                                <div className="left-sidebar-content">
                                
                                    <div className="left-sidebar-content-rows">
                                        <div className="left-sidebar-content-rows-activeBox">
                                            <img src={activeBox}/>
                                            <img src={activeBoxInner} className="left-sidebar-content-rows-activeBox-inner"/>
                                        </div>
                                        <p className="left-sidebar-content-rows-text">Contact details</p>
                                    </div>

                                    <div className="left-sidebar-content-rows">
                                        <div className="left-sidebar-content-rows-activeBox">
                                            <img src={activeBox}/>
                                            <img src={activeBoxInner} className="left-sidebar-content-rows-activeBox-inner"/>
                                        </div>
                                        <p className="left-sidebar-content-rows-text">Investment Plans</p>
                                    </div>

                                    <div className="left-sidebar-content-rows">
                                        <div className="left-sidebar-content-rows-activeBox">
                                            <img src={activeBox}/>
                                            <img src={activeBoxInner} className="left-sidebar-content-rows-activeBox-inner"/>
                                        </div>
                                        <p className="left-sidebar-content-rows-text">Investment Preferences</p>
                                    </div>
                                </div>
                                <div className="left-sidebar-bottom">
                                    <div className="left-sidebar-bottom-icon">
                                        <img src={quoteIcon}/>
                                    </div>
                                    <p className="left-sidebar-bottom-text">
                                        We care about your time, that's why we created a 3-stage onboarding that will not take more than 5 minutes to complete
                                    </p> 
                                    <p className="left-sidebar-bottom-autor">
                                        William Mac
                                    </p> 
                                    <div className="left-sidebar-bottom-footer">
                                        <p className="left-sidebar-bottom-footer-text">
                                           CO-FOUNDER, INVESTOR 
                                        </p>
                                        <img src={up}/>
                                    </div>
                                </div>
                            </div>
                            
                            <Switch>
                                <Route exact path="/" component={contactDetails}/>
                                <Route path="/plans" component={investmentPlans}/>
                                <Route path="/pref" component={investmentPref}/>
                            </Switch>
                        </div>                       
        );
    }
}

export default App;