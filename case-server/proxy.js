var express = require('express');
var app = express();
var cors = require('cors');
var requester = require('request');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());
var https = require('https');

var host = '172.16.69.226';
var baseUrl = "https://" + host;
var port = '8501';
var allowedMethods = ['POST', 'DELETE', 'PUT'];

/*-----------------------------------------------------------------*/

function createProxyUrl(originalUrl) {
  return [baseUrl, ":" , port, originalUrl].join('');
}

/*-----------------------------------------------------------------*/

app.all("/*", function(request, response) {
  var uri = createProxyUrl(request.originalUrl);

  var agentOptions = {
    host: host
  , port: port
  , path: request.originalUrl
  , rejectUnauthorized: false
  , headers: request.headers
  }
  
  agent = new https.Agent(agentOptions);
  
  console.log("Sending request at:- ", uri);
  requester({
    uri: uri
  , method: request.method
  , agent: agent
  , body: allowedMethods.indexOf(request.method)!=-1 ? JSON.stringify(request.body) : ''
  , headers: agentOptions.headers
  }, function (err, res, body) {
     response.setHeader('Content-Type', 'application/json');
     //console.log(err, res, body);
     if(err){
         return response.send(err);
     }
     response.send(res.body);
  });
});

app.listen(5555, function () {
  console.log("--> Example app listening on port 5555");
})
