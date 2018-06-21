var http   = require('http'),
qs         = require('querystring'),
nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'myemail@gmail.com',
    pass: 'myGmailPassword'
  }
});

var server = http.createServer(function(req, res) {
  if (req.method === 'POST' && req.url === '/') {
    var body = '';
    req.on('data', function (data) {
      body += data;
    });

    req.on('end', function () {
      var mail = qs.parse(body);

      var mailOptions = {
        from: mail.name+' <'+ mail.sender +'>',
        to: 'myAdress@anything.com',
        subject: 'Contact ',
        text: mail.message,
        html: mail.message
      };

      transporter.sendMail(mailOptions, function(err, response){
        !!err ? console.error(err) : res.end();
      });
    });
  }
  res.end();
});

server.listen(1337);