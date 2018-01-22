const fs = require('fs');

module.exports = {
  port: 3001,
  couchdbUri: "http://localhost:5984",
  couchdbName: "metis",


  serverUri: "http://localhost:3001",


  backofficeBaseUri: "http://localhost:3000",

  websiteBuilderUri: '',

  adminPassword: "xxxx",
  adminEmail: "lala-toto@gmail.com",


  smtpService: "Gmail",
  smtpEmail: "mlkjmlkj.mlk@gmail.com",
  smtpPassword: "xxxxxxxx",
  mailingHubEmail: "my-diffusion-list@gmail.com",

  secret: "patéencroute",

  key: fs.readFileSync('ssl/key.pem'),
  csr: fs.readFileSync('ssl/csr.pem'),
  cert: fs.readFileSync('ssl/cert.pem'),

  "twitter_consumer_key": "xxxx",
  "twitter_consumer_secret": "xxxx",
  "twitter_access_token": "xxx-xxxx",
  "twitter_access_token_secret": "xxxxxx"
}
