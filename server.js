const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
let PORT = process.env.PORT || 6000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

    $("#submit").on("click", function(event) {
    event.preventDefault();
      
      var Data = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [
          $("#q1").val(),
          $("#q2").val(),
          $("#q3").val(),
          $("#q4").val(),
          $("#q5").val(),
          $("#q6").val(),
          $("#q7").val(),
          $("#q8").val(),
          $("#q9").val(),
          $("#q10").val()
        ]
    };

      
    });
  

