var express = require('express');
var app = express();
var routes =  require('./routes');

var pathToApp = __dirname;
app.use('/', express.static(__dirname + '/public'));
app.use('/api', routes);

app.get('*', function(req, res) {
  res.sendFile(pathToApp + '/public/index.html');
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
