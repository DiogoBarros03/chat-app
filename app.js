const express = require('express');
const app = express();
const ejs = require('ejs');

const port = 8000;
   
// Render index.ejs file\
app.use(express.static(__dirname + '/public/'));

app.set('views', './views');
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
    req.header('User-Agent')
    // Render page using renderFile method
    res.render('index');
});
   
// Server setup
app.listen(port, function (error) {
    if (error)
        throw error;
    else
        console.log("Server is running");
});