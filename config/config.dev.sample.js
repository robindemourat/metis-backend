const fs = require('fs');

module.exports = {
  port: 3001,
  couchdbUri: "http://localhost:5984",
  couchdbName: "plurishing",

  backofficeBaseUri: "http://localhost:3000",

  websiteBuilderUri: '',


  smtpHost: "smtp.ethereal.email",
  smtpPort: 587,

  smtpService: "Gmail",
  smtpEmail: "mlkjmlkj.mlk@gmail.com",
  smtpPassword: "xxxxxxxx",

  secret: "patéencroute",

  key: fs.readFileSync('ssl/key.pem'),
  csr: fs.readFileSync('ssl/csr.pem'),
  cert: fs.readFileSync('ssl/cert.pem')
}
