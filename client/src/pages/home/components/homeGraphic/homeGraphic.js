import React, { Component } from "react"
import "../homeGraphic/style.css"
import { Link } from "react-router-dom"

export default class HomeGraphic extends Component {

    state = {
        navOpen: false
    }

    toggleNav = () => {
        this.setState({ navOpen: !this.state.navOpen });
    }

    render() {
        const display = this.state.navOpen ? "block" : "none";
        return (
            <div id="homeBackground">
            <div id="homeContainer">
                <div className="row">
                    <div id="colorBlock" className="col-5">
                    <div id="title">
                        The
                        <br/>
                        New York
                        <br/>
                        Times.
                    </div>
                    <div id="title2">
                    SEARCH FOR ANY ARTICLE 
                    <br/>
                    ABOUT ANY SUBJECT
                    </div>
                    </div>
                    <button className="openbtn" onClick={this.toggleNav}>☰</button>
                    <div id="mySidepanel" className="sidepanel" style={{ display: display}}>
                        <a href="javascript:void(0)" className="closebtn" onClick={this.toggleNav}>×</a>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Clients</a>
                        <a href="#">Contact</a>
                    </div>


                     
                    {/* <div id="button" className="col-1">
	                <input id="demo-2" type="search"/>
                    </div> */}
                </div>
                
            </div>
            </div>
        )
    }
}