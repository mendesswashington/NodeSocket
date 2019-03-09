var express = require('express')
var bodyParser = require('body-parser')
var app = express()
 
const hostname = '192.168.0.196';
const port = 5000;

app.use(bodyParser.json());

app.use( function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
    console.log(req.body)
})

app.post("/", (req, res)=>{
  console.log("Json => "+req.body)
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});