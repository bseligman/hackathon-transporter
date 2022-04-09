 //Import node
var formidable = require('formidable');
var http = require('http');
var fs = require('fs');
var os = require('os');
var path=require('path');
const express = require('express')
const app = express()

app.use(express.static('public'))
const iplol = fs.readFileSync('/Users/benjaminseligman/Desktop/idklol/ip.txt', 'utf8')

//vars
var porthere = 5010;
var download = function(url, dest, cb) {
    var file = fs.createWriteStream(dest);
    var request = http.get(url, function(response) {
      response.pipe(file);
      file.on('finish', function() {
        file.close(cb);  // 
      });
    }).on('error', function(err) { // error handler
      fs.unlink(dest); // 
      if (cb) cb(err.message);
    });
  };

async function attemptstart(namehere) {
//attempts to try port, if filled then tries again (wow really advanced!!)
for (let i = 0; i > 10; i++) {
try {
    //listen at port porthere
    server.listen(porthere);
//if port filled 
} catch(error) {
    console.error(error)
} finally {
    server.close(porthere)
    console.log('Error: ' + porthere + ' is filled, retrying...')
    porthere = porthere + 10;
}
}
}

//body
var http = require('http');
var formidable = require('formidable');
const res = require('express/lib/response');

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.filepath;
        var newpath = '/Users/benjaminseligman/Desktop/idklol/uploads/' + files.filetoupload.originalFilename;
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
          //finish
        });
   });
    } else {
      //css
      res.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">')
      res.write('<style>')
      res.write('body {background-image: linear-gradient(to bottom right, red, blue); font: Fantasy; color: white; text-align: center; font-size: 60%;   font-weight: 60%; }')
      res.write(' h1 { font-size: 100%; }')
      res.write('@media only screen and (min-width: 768px) {   .col-1 {width: 8.33%;}  }')
      res.write(' [class*="col-"] {width: 100%; ')
      res.write('</style>")')
      //html
      res.write("<h1> Fontoes </h1>")
      res.write("<p> Enter file: </p> ")
      res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write('</form>');

    }
  }).listen(porthere, iplol);

//simple log
console.log('Node sever port ' + porthere + ' is running')