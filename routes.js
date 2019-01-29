var express = require('express')
var router = express.Router();
var https = require('https');

router.get('/profile', function (req, res) {
 https.get('https://gm50ml1rtc.execute-api.ap-southeast-1.amazonaws.com/default/testOrder', function(resp) {
		var chunk  = '';
		resp.on('data', function(d) {
			chunk = chunk + d;
		});
		resp.on('end', function() {
			res.send(chunk);
		});
 });
 // res.send('success');
})

module.exports = router