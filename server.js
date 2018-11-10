const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("client/public"));

mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/NYTArticles");

const articleRoutes = require("./routes/article.js");
app.use(articleRoutes);

app.listen(PORT, function(){
  console.log("Connected on PORT: " + PORT);
});
