const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
let PORT = process.env.PORT || 6000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

  
  

