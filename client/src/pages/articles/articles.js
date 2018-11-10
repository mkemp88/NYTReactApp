import React, { Component } from "react"
import ArticlePage from "./components/articlePage/articlePage.js"
import { Link } from "react-router-dom"
import axios from "axios"

export default class Article extends Component {
    saveArticle = (article) => {

        axios.post('/api/articles',{
            title: article.title,
            autor: article.author,
        });
    } 
    render() {
        return(
            <div>
                <ArticlePage />
            </div>
        );
    }
}