const express = require("express")
const path = require('path');
var compression = require('compression')
var favicon = require('serve-favicon')
var morgan = require('morgan')
const app = express()

morgan('tiny')
app.use(favicon(path.join(__dirname, 'public', 'img/favicon.ico')))
app.use(compression())
app.use(express.static("public"))

app.get("/", function (req, res) {
    res.send("<h1>Hello World!</h1>")
})

app.listen(process.env.PORT || 3000,
    () => console.log("Server is running..."));
