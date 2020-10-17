import React, {Component} from 'react';
import {Link} from "react-router-dom";

import "./investmentPref.scss"

import checkbox from "../../img/checkbox.png"


class investmentPref extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeYesButton: false,
    };
  }

  handleClick(name, id, iconId) {
    const prefItem = document.getElementById(id),
    prefItemIcon = document.getElementById(iconId),
    prefItemIsActive = prefItem.classList.contains("pref-content-main-item-active");

     if (prefItemIsActive) {
        prefItem.classList.remove("pref-content-main-item-active");
        prefItemIcon.classList.remove("pref-content-main-item-icon-active");

        prefItem.classList.add("pref-content-main-item-ordinary");
        prefItemIcon.classList.add("pref-content-main-item-icon-ordinary");
     } else{
        prefItem.classList.add("pref-content-main-item-active");
        prefItemIcon.classList.add("pref-content-main-item-icon-active");

        prefItem.classList.remove("pref-content-main-item-ordinary");
        prefItemIcon.classList.remove("pref-content-main-item-icon-ordinary");
     }
  }


    render() {
            console.log("hello");
                return (
                <div className = "pref"> 
                    <div className = "pref-top"> 
                        <p className = "pref-top-step">  
                            STEP 3 OF 3
                        </p>
                        <p className = "pref-top-lost">  
                            Lost or have trouble?  <a href="#" className = "pref-top-help">Get help</a>
                        </p>
                    </div>
                    {
                        console.log("hr")
                    }

                    <div className = "pref-content"> 
                       <div className = "pref-content-titles">  
                            <h1 className = "pref-content-titles-main">Investment preferences</h1>
                            <p className = "pref-content-titles-text">This will help us figure out what your investment options are so that we can show you only possibly intresting for you deals</p>
                        </div>
                        <div className = "pref-content-main">
                            <h2 className = "pref-content-main-title">What kind of real estate are you interested in?</h2>

                            <div onClick={() => this.handleClick("Single family", "prefItem1", "prefItem1Icon")} id="prefItem1" className = "pref-content-main-item pref-content-main-item-active">
                                <div className = "pref-content-main-item-icon pref-content-main-item-icon-active" id="prefItem1Icon">
                                    <img src={checkbox}/>
                                </div>
                                <span className = "pref-content-main-item-text">Single family</span>
                            </div>

                            <div  onClick={() => this.handleClick("Residential multifamily", "prefItem2", "prefItem2Icon")} id="prefItem2" className = "pref-content-main-item pref-content-main-item-ordinary">
                                <div className = "pref-content-main-item-icon pref-content-main-item-icon-ordinary" id="prefItem2Icon">
                                    <img src={checkbox}/>
                                </div>
                                <span className = "pref-content-main-item-text">Residential multifamily</span>
                            </div>

                            <div onClick={() => this.handleClick("Commercial retail", "prefItem3", "prefItem3Icon")} id="prefItem3" className = "pref-content-main-item pref-content-main-item-ordinary">
                                <div className = "pref-content-main-item-icon pref-content-main-item-icon-ordinary" id="prefItem3Icon">
                                    <img src={checkbox}/>
                                </div>
                                <span className = "pref-content-main-item-text">Commercial retail</span>
                            </div>

                            <div onClick={() => this.handleClick("Commercial industrial", "prefItem4", "prefItem4Icon")} id="prefItem4" className = "pref-content-main-item pref-content-main-item-active">
                                <div className = "pref-content-main-item-icon pref-content-main-item-icon-active" id="prefItem4Icon">
                                    <img src={checkbox}/>
                                </div>
                                <span className = "pref-content-main-item-text">Commercial industrial</span>
                            </div>

                            <div onClick={() => this.handleClick("Commercial hospitality", "prefItem5", "prefItem5Icon")} id="prefItem5" className = "pref-content-main-item pref-content-main-item-ordinary">
                                <div className = "pref-content-main-item-icon pref-content-main-item-icon-ordinary" id="prefItem5Icon">
                                    <img src={checkbox}/>
                                </div>
                                <span className = "pref-content-main-item-text">Commercial hospitality</span>
                            </div>

                            <div onClick={() => this.handleClick("Commercial warehousing", "prefItem6", "prefItem6Icon")} id="prefItem6" className = "pref-content-main-item pref-content-main-item-ordinary">
                                <div className = "pref-content-main-item-icon pref-content-main-item-icon-ordinary" id="prefItem6Icon">
                                    <img src={checkbox}/>
                                </div>
                                <span className = "pref-content-main-item-text">Commercial warehousing</span>
                            </div>

                            <div onClick={() => this.handleClick("Commercial office", "prefItem7", "prefItem7Icon")} id="prefItem7" className = "pref-content-main-item pref-content-main-item-ordinary">
                                <div className = "pref-content-main-item-icon pref-content-main-item-icon-ordinary" id="prefItem7Icon">
                                    <img src={checkbox}/>
                                </div>
                                <span className = "pref-content-main-item-text">Commercial office</span>
                            </div>

                            <div onClick={() => this.handleClick("Other", "prefItem8", "prefItem8Icon")} id="prefItem8" className = "pref-content-main-item pref-content-main-item-active">
                                <div className = "pref-content-main-item-icon pref-content-main-item-icon-active" id="prefItem8Icon">
                                    <img src={checkbox}/>
                                </div>
                                <span className = "pref-content-main-item-text">Other</span>
                            </div>

                        </div>
                    </div>

                    <div className = "pref-bottom">  
                           <a href="#" className = "pref-bottom-link">Back to the homepage</a>
                           <div className = "pref-bottom-buttons">
                                <div className = "pref-bottom-buttons-skip">
                                    Skip for now
                                </div>
                                <Link to="/" className = "pref-bottom-buttons-next">
                                    Finish
                                </Link>
                           </div>
                    </div>
                </div>
        );
    }
}

export default investmentPref;