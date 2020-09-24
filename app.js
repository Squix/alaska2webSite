require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
path = require("path");

var fs = require('fs');

var morgan = require('morgan');
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
app.use(morgan('combined', {stream: accessLogStream}))

app.use(express.static('build'))
app.use(express.static( path.join(__dirname, 'server/public') ));
app.use(express.static( path.join(__dirname, 'client/style') ))
app.use('/DATASETS', express.static( path.join(__dirname, 'DATASETS') ));
app.use('/TRAINING_RAW', express.static( path.join(__dirname, 'TRAINING_RAW') ));


var https = require('https');
var http = require('http');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// register api routes
const routes = require('./server/config/routes')
routes(app)

var httpServer = http.createServer(app);

httpServer.on('request', function(req, res) {
    
      console.log('HTTP REQUEST');
      console.log(req.url);
      console.log(req.method);
//      console.log(req.headers);
    
});

app.set('httpsPort', process.env.PORTHTTPS);
app.set('httpPort', process.env.PORTHTTP);

if(JSON.parse(process.env.ENABLE_HTTPS)) {

  var httpsServer=https.createServer({
    key: fs.readFileSync('../key/alaska.utt.fr.key', 'utf8'),
    cert: fs.readFileSync('../key/alaska_utt_fr.crt', 'utf8'),
    ca: fs.readFileSync('../key/DigiCertCA.crt', 'utf8'), 
    rejectUnauthorized: false,
    requestCert: true
  }, app)

  httpsServer.on('request', function(req, res) {
      console.log('HTTPS REQUEST');
      console.log(req.url);
      console.log(req.method);
  //    console.log(req.headers);
  });
  
  httpsServer.listen(
    process.env.PORTHTTPS,
    
    () => {
      
      console.log("HTTPS enabled.")
      console.log(`Server listening on port ${process.env.PORTHTTPS}`)
    }
  )

}


httpServer.listen(
  process.env.PORTHTTP,
  console.log(`Server listening on port ${process.env.PORTHTTP}`)
)



module.exports = app
