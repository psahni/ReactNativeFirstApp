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
  console.log(request.originalUrl, request.originalUrl.indexOf("login"), request.body)
  if(request.originalUrl.indexOf("login") >= 0 ) {
    const {userName, password} = request.body;
    if(userName == 'admin' && password=='admin'){
      const bearerToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2ODJiMzdmMS0zMDJkLTQ0OTMtOTkxNS0zODAxNDkwNTJkNDgiLCJjaWQiOiI3MzhFMTlEMC02ODU3LTRFNjMtOTA2My1DMkYzMEE5NTdFMzciLCJpc3MiOiJsci1hdXRoIiwicmlkIjoic2VydmljZUFjY291bnQiLCJwaWQiOjIsInN1YiI6IkNhc2UgQXBwIiwiZXhwIjozMDg1OTI2NjE0LCJpYXQiOjE1MDgwNzkwMTR9.svSWuKmeBWJ2HwIjmxjk5Fow-SHP3S6P6C1znGwm-5jYXI7ONpwUs0BixD_cZfpvML3Vh0IJQ6sXs9yH_VpWUCvn5X5D_CTPiAgnDGzhJoCvmSw3QoFiseAGP_TA1sVqysXEWZYTd9-qQamdntemJrEn2hWvzhrkp3sgYT7deTD7M367A0gMPZ431i37l10S5eg4HBM-yYAPCI75CpuRi8RpMccx1ox3GyPUpj6C0w4IBG_hYZbY2wzRQk7R-adKS8VrL0h4x1C9Bn8JCkBhnaQx4WLvMGr0LO5dkuSMT_2vQt_MRE8zFCnS6Ey_C_m195vgeU32s1dokaH_nOh3Jw";
      return response.send({userName: userName, accessToken: bearerToken});
    }
  }
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
     response.status(res.statusCode).send(res.body);
  });
});

app.listen(5555, function () {
  console.log("--> Example app listening on port 5555");
})
