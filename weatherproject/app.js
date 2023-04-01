 const express = require("express");
const https = require("https");
const app = express();

app.get("/", function(req, res){
    https.get("https://api.openweathermap.org/data/2.5/weather?appid=8fdbca78c14752b0d76d631529815492&q=london,uk", function(response){
        console.log(response.statusCode);
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            console.log(weatherData);
        })
    })
    res.send("Server is set");
})

app.listen(3000,function(){
    console.log("Server is running on port 3000");
})
