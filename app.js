const express = require("express");

const app = express();

app.use(express.static('public'));

app.listen("3000", function(){
    console.log("Holaa Mundo!")
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
});

app.get('*',(req, res) => {
    res.sendFile(__dirname + '/views/notfound.html')
});