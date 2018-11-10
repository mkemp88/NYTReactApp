import React, { Component } from "react"
import { Link } from "react-router-dom"
import HomeGraphic from "./components/homeGraphic/homeGraphic.js"


export default class Home extends Component {
    render () {
        return(
            <div>
                <HomeGraphic />
            </div>
        );
    }
}