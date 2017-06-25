var fs = require('fs');

fs.appendFile('myLog.txt', 'Hello Umesh', function(err) {
	if(err) throw err;
	console.log('Umesh File Saved');
});