var fs = require('fs');

fs.appendFile('myLog.txt', 'IoT logs coming here', function(err) {
	if(err) throw err;
	console.log('Updated');
});