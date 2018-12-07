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
                        <input id="search" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <a href="/articles/politics">Politics</a>
                        <a href="/articles/sports">Sports</a>
                        <a href="/articles/business">Business</a>
                        <a href="/articles/world">World</a>
                        <a href="/articles/tech">Tech</a>
                        <a href="/articles/science">Science</a>
                        <a href="/articles/arts">Arts</a>
                        <a href="/articles/food">Food</a>
                        <a href="/articles/travel">Travel</a>
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