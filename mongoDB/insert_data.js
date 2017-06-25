var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
	if(err) throw err;
	var myobj = [
	{name: 'Umesh', CPI:'8.6'},
	{name: 'Punit', CPI:'8.4'},
	{name: 'Karan', CPI:'8.8'},
	{name: 'Nachi', CPI:'7.6'}
	];
	db.collection("customers").insertMany(myobj, function(err, res) {
		if(err) throw err;
		console.log("Numbers of records insterted: " + res.instertedCount);
		db.close();
	});
});