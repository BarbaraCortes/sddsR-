var app = require('express')();
app.listen(3000, function() {
	console.log("Ola mundo :)")
});

app.get('/', function(req, res) {
	res.send('<html> Ola mundo </html>');
});