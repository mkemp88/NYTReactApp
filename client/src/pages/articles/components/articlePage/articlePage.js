import React, { Component } from "react"
import "../articlePage/style.css"
import { Link, withRouter } from "react-router-dom"
import axios from "axios"

class ArticlePage extends Component {
    state = {
        articles: []
    }

    componentDidMount() {
        const { search } = this.props.match.params;
        axios.get(`http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&facet_field=document_type&document_type=article&api-key=781f23bc431b42bbbe811a08cfe6247e`).then(response => {
            console.log(response);
            this.setState({
                articles: response.data.response.docs
            })
        });
    }

    render() {

        console.log(this.props.match.params.search)

        return (
            <div id="articleMainContainer">
                <div id="dropdownButton" className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        ARTICLE TOPICS
                    </button>
                    <div className="dropdown-menu scrollable-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Arts</a>
                        <a className="dropdown-item" href="#">Automobiles</a>
                        <a className="dropdown-item" href="#">Autos</a>
                        <a className="dropdown-item" href="#">Blogs</a>
                        <a className="dropdown-item" href="#">Books</a>
                        <a className="dropdown-item" href="#">Booming</a>
                        <a className="dropdown-item" href="#">Business</a>
                        <a className="dropdown-item" href="#">Business Day</a>
                        <a className="dropdown-item" href="#">Corrections</a>
                        <a className="dropdown-item" href="#">Crosswords and Games</a>
                        <a className="dropdown-item" href="#">Dining and Wine</a>
                        <a className="dropdown-item" href="#">Editor's Notes</a>
                        <a className="dropdown-item" href="#">Education</a>
                        <a className="dropdown-item" href="#">Fashion and Style</a>
                        <a className="dropdown-item" href="#">Food</a>
                        <a className="dropdown-item" href="#">Front Page</a>
                        <a className="dropdown-item" href="#">Giving</a>
                        <a className="dropdown-item" href="#">Global Home</a>
                        <a className="dropdown-item" href="#">Great Homes and Destinations</a>
                        <a className="dropdown-item" href="#">Health</a>
                        <a className="dropdown-item" href="#">Home and Garden</a>
                        <a className="dropdown-item" href="#">International Home</a>
                        <a className="dropdown-item" href="#">Job Market</a>
                        <a className="dropdown-item" href="#">Learning</a>
                        <a className="dropdown-item" href="#">Magazine</a>
                        <a className="dropdown-item" href="#">Movies</a>
                        <a className="dropdown-item" href="#">Multimedia</a>
                        <a className="dropdown-item" href="#">NYRegion</a>
                        <a className="dropdown-item" href="#">NYT Now</a>
                        <a className="dropdown-item" href="#">National</a>
                        <a className="dropdown-item" href="#">New York</a>
                        <a className="dropdown-item" href="#">Obituaries</a>
                        <a className="dropdown-item" href="#">Olympics</a>
                        <a className="dropdown-item" href="#">Open</a>
                        <a className="dropdown-item" href="#">Opinion</a>
                        <a className="dropdown-item" href="#">Paid Death Notices</a>
                        <a className="dropdown-item" href="#">Public Editor</a>
                        <a className="dropdown-item" href="#">Real Estate</a>
                        <a className="dropdown-item" href="#">Science</a>
                        <a className="dropdown-item" href="#">Sports</a>
                        <a className="dropdown-item" href="#">Style</a>
                        <a className="dropdown-item" href="#">Sunday Magazine</a>
                        <a className="dropdown-item" href="#">Sunday Review</a>
                        <a className="dropdown-item" href="#">T Magazine</a>
                        <a className="dropdown-item" href="#">Technology</a>
                        <a className="dropdown-item" href="#">Theatre</a>
                        <a className="dropdown-item" href="#">Today's Headlines</a>
                        <a className="dropdown-item" href="#">Travel</a>
                        <a className="dropdown-item" href="#">Universal</a>
                        <a className="dropdown-item" href="#">UrbanEye</a>
                        <a className="dropdown-item" href="#">Washington</a>
                        <a className="dropdown-item" href="#">Week in Review</a>
                        <a className="dropdown-item" href="#">World</a>
                    </div>
                </div>
                <div id="articleContainer">
                    <div className="row">
                        <div id="Cards" className="col-12">
                            {this.state.articles.map((value, index) => {
                                return (
                                    <div key={index} id="articles">
                                        <h1>{value.headline.main}</h1>
                                        <p id="snippet">{value.snippet}</p>
                                        <a id="articleButton" href={value.web_url}>></a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ArticlePage);