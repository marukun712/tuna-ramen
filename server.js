const express = require("express");
const app = express();
var port = '2000'

app.get('/', function(req, res) {
    app.use(express.static('./src'))
    res.sendFile(__dirname + '/src/html/index.html')
})

app.listen(port, function() {
    console.log(`http://localhost:${port}`)
})