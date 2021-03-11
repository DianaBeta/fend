/*Emty js object to act as an endpoint for all routes*/
projectData = {};

const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);

var textapi = process.env.API_KEY;
 
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/add', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})
//POST route: sends the data to the project endpoint
app.post('.all', function (req, res) {
    let data = req.body;
});
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

//app.get('/test', function (req, res) {
//    res.send(mockAPIResponse)
//})

   // working fetch, above debugging and visualisation of post requests
   fetch('https://api.meaningcloud.com/sentiment-2.1?key=4bde5610d8cb5b0be96377106b7daf34&lang=en&txt=I%20am%20happy', {
    method: "POST",
    /*body: JSON.stringify({
        key: Client.textapi,
        lang: "en",
        verbose: "y",
        txt: "I am happy"


    })*/
})
.then((res) => {
    console.log("Request complete! response:", res.json());
  })

    /*body: JSON.stringify({
        key: Client.textapi,
        lang: "en",
        verbose: "y",
        txt: "I am happy"


    })*/
