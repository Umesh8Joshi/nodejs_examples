var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'umesh14el007@gmail.com',
		pass: 'password'
	}
});

var mailOptions = {
	from: 'umesh14el007@gmail.com',
	to: 'umesh@techaakar.in',
	subject: 'sending mail through node.js',
	text: 'IoT mails are coming'
};

transporter.sendMail(mailOptions, function(error, info){
	if(error){
		console.log(error);
	}else {
		console.log('Email sent: ' + info.response);
	}
});