Metis-server
===

`metis-server` is the main backend application used to run the `metis` experimental plateform for multimodal publishing.

It is an express app allowing to interact with a `couchdb` database storing different types of objects relating to the experiment, and also to provide some microservices used by other applications.

# Installation

## Install prince xml

You have to install [PrinceXML](https://www.princexml.com/) bin on your server machine in addition to the node app, and have it available through your `PATH`.

## Setup couchdb in development

The app is configured to use [`couchdb`](http://couchdb.apache.org/) technology as database. Please refer to the [installation page](http://docs.couchdb.org/en/1.6.1/install/) of couchdb.

You have then to run a couchdb instance. On a mac os equipped with `brew`, it is done this way :

```bash
brew services start couchdb
```

Once this is done, head to [http://localhost:5984/_utils](http://localhost:5984/_utils) to access couchdb futon interface, and create a database called `metis`.

## Setup API credentials

### Setup an SMTP email account access

You will be asked to provide an email address and password to use for sending emails from the platform. Be sure to create a specific email account for this. For now the app has been tested successfully with a `gmail` account, using other services/methods has not been tested.

### Setup a twitter API access

You will be asked to provide twitter API credentials in order to be able to send tweets from the plateform:

* go to [Twitter applications homepage](https://apps.twitter.com/)
* click on `create a new app` and fill related form
* go to your new application page, then to the `Keys and Access Tokens` tab
* generate consumer key, consumer secret, access token, access token secret. Keep these values for later.

*Please note that tweets will be sent from the account from which you have setup the new twitter app*.

## Clone repo, install dependencies, setup config

```
# clone repo
git clone https://github.com/robindemourat/metis-backend
cd metis-backend
# install dependencies
npm install
# install precommit dependency
npm install precommit
# setup dev config
cp config/config.dev.sample.js config/config.dev.js
# ... fill with your specific dev config
# setup prod config
cp config/config.prod.sample.js config/config.prod.js
# ... fill with your specific prod config

# setup admin user in dev mode
npm run populate-db:dev
```

# Development and usage

```
# run in dev mode (dev config, hot reloading)
npm run dev

# run in prod mod (using pm2)
npm run start

# monitor processes and error in prod mode (using pm2)
npm run monitor

# lint code (see package.json .eslintrc for details)
npm run lint

# lint code while applying autofixes
npm run lint:fix

# bootstrap an admin superuser (dev mode)
npm run populate-db:dev

# bootstrap an admin superuser (prod mode)
npm run populate-db

# run tests with mocha
npm run test

# run tests with mocha and rerun when source is modified
npm run test:watch

# check test coverage (with istanbul/nyc)
npm run cov

# build automated documentation (with esdoc)
npm run doc

# build code for production (with babel)
npm run build

# deploy to heroku (push and set env variables)
npm run deploy:heroku
```

# Deployment

As it uses some experimental es6 and es7 features in its source code, code must be transpiled to plain javascript in production mode. This is done with `npm run build`.

## Environment variables

Please note you have to set a series of env variables in production mode.

The list of env variables necessary to run the app in production mode is visible in `config/config.map.js`. Each variable name must be converted to constant notation convention (i.e. `backofficeBaseUri` becomes `BACKOFFICE_BASE_URI`).

Here is the list of env variables that must be set :

```bash
BACKOFFICE_BASE_URI # uri of the frontend backoffice app

WEBSITE_BUILDER_URI # uri of the backend server responsible of building web montages

SERVER_URI # server intance own uri (used to build links)

MAILING_HUB_EMAIL # target email (e.g. mailing-list email) for sending group emails

SMTP_SERVICE # email service

SMTP_EMAIL # email address

SMTP_PASSWORD # email password

SECRET # application secret, must be identical with the one of the backend server responsible of building web

PORT # port to serve the application to

TWITTER_CONSUMER_KEY # see https://apps.twitter.com/

TWITTER_CONSUMER_SECRET # see https://apps.twitter.com/

TWITTER_ACCESS_TOKEN # see https://apps.twitter.com/

TWITTER_ACCESS_TOKEN_SECRET # see https://apps.twitter.com/
```

*Please note that for a herokuapp deployment scenario, a specific script providing an automatic way to convert prod config `json` file into environments variables is accessible through the `deploy:heroku` npm script*.


# Application endpoints

Here is a brief overview of the various API endpoints provided by the app.

## Authentification-related routes

### Signup

As new users must be created first, this routes allows to setup for the first time a new user token.

###### HTTP REQUEST

```
POST /sign-up
```

###### PROTECTION

This route requires to provide a valid normal access token.

###### SUCCESS RESPONSE

```
{
  success: true,
  message: 'Enjoy your token!',
  user: {}, // user object
  token: 'xxx' // access token
}
```

### Login

###### HTTP REQUEST

```
POST /login
```

###### PROTECTION

This route is not protected.

###### SUCCESS RESPONSE

```
{
  success: true,
  message: 'Enjoy your token!',
  user: {}, // user object
  token: 'xxx' // access token
}
```

### Password reset

###### HTTP REQUEST

```
POST /request-password-reset
```

###### PROTECTION

This route is not protected.

###### SUCCESS RESPONSE

```
{
  success: true,
  message: 'request sent'
}
```

## Interface to the database documents

### Get all users

###### HTTP REQUEST

```
GET /api/users/
```

###### PROTECTION

This route requires to provide a valid admin access token.

###### SUCCESS RESPONSE

```
[{
  // ... each user document
}]
```

### Get a specific user

###### HTTP REQUEST

```
GET /api/users/:id
```

###### PROTECTION

This route requires to provide a valid admin access token or normal (if user asking the change is the same as the target user) access token.

###### SUCCESS RESPONSE

```
{
  // ... specific user document
}
```

###### PROTECTION

This route requires to provide a valid admin access token or normal (if user asking the change is the same as the target user) access token.

### Create user

###### HTTP REQUEST

```
POST /api/users/:id
```

###### PROTECTION

This route requires to provide a valid admin access token.

###### SUCCESS RESPONSE

```
[{
  // ... each user document
}]
```

### Update user

###### HTTP REQUEST

```
PUT /api/users/:id
```

###### PROTECTION

This route requires to provide a valid admin access token or normal (if user asking the change is the same as the target user) access token.

###### SUCCESS RESPONSE

```
{
  "ok":true,
  "id":"b808806f9b9857fbac84c7d16f08b00b",// id of the updated document
  "rev":"3-dc5222aadab5839766e7fc936ad6edf7"// rev of the updated document
}
```

### Delete user

###### HTTP REQUEST

```
DELETE /api/users/:id
```

###### PROTECTION

This route requires to provide a valid admin access token.

###### SUCCESS RESPONSE

```
{
  "ok":true,
  "id":"b808806f9b9857fbac84c7d16f08a206", // deleted document id
  "rev":"3-03cb90b46f463ad51b50ef2e78b75436" // deleted document rev
}
```

### Change password

###### HTTP REQUEST

```
POST /api/users/change-password
```

###### PROTECTION

This route requires to provide a valid normal access token.

###### SUCCESS RESPONSE

```
{
  // updated user
}
```

### Assets

### Get all assets

###### HTTP REQUEST

```
GET /api/assets/
```

###### PROTECTION

This route requires to provide a valid normal access token.

###### SUCCESS RESPONSE

```
[{
  // ... each document
}]
```

### Get specific asset

###### HTTP REQUEST

```
GET /api/assets/:id
```

###### PROTECTION

This route requires to provide a valid normal access token.

###### SUCCESS RESPONSE

```
{
  // ... specific asset document
}
```

### Create asset

###### HTTP REQUEST

```
POST /api/assets/:id
```

###### SUCCESS RESPONSE

```
[{
  // ... updated list of assets
}]
```

###### PROTECTION

This route requires to provide a valid normal access token.

### Update asset

###### HTTP REQUEST

```
PUT /api/assets/:id
```

###### PROTECTION

This route requires to provide a valid normal access token.

###### SUCCESS RESPONSE

```
{
  // ... updated asset document
}
```

### Delete asset

###### HTTP REQUEST

```
DELETE /api/assets/:id
```

###### SUCCESS RESPONSE

```
{
  ok: true,
  id: '',// id of the deleted document
  rev: '',// rev of the deleted document
}
```

###### PROTECTION

This route requires to provide a valid normal access token.

### Get asset attached file

###### HTTP REQUEST

```
GET /api/assets/:id/:filename
```

###### PROTECTION

This route is not protected.

###### SUCCESS RESPONSE

```
binary data of the asset attachment
```

### Resources

### Get all resources

###### HTTP REQUEST

```
GET /api/resources/
```

###### PROTECTION

This route requires to provide a valid normal access token.

###### SUCCESS RESPONSE

```
[{
  // ... each document
}]
```

### Get specific resource

###### HTTP REQUEST

```
GET /api/resources/:id
```

###### PROTECTION

This route requires to provide a valid normal access token.

###### SUCCESS RESPONSE

```
{
  // ... specific resource document
}
```

### Create resource

###### HTTP REQUEST

```
POST /api/resources/:id
```

###### PROTECTION

This route requires to provide a valid normal access token.

###### SUCCESS RESPONSE

```
{
  // ... new resource document
}
```

###### PROTECTION

This route requires to provide a valid normal access token.

### Update resource

###### HTTP REQUEST

```
PUT /api/resources/:id
```

###### SUCCESS RESPONSE

```
{
  // ... updated resource document
}
```

###### PROTECTION

This route requires to provide a valid normal access token.

### Delete resource

###### HTTP REQUEST

```
DELETE /api/resources/:id
```

###### PROTECTION

This route requires to provide a valid normal access token.

###### SUCCESS RESPONSE

```
{
  ok: true,
  id: '',// id of the deleted document
  rev: '',// rev of the deleted document
}
```

### Compositions

### Get all compositions

###### HTTP REQUEST

```
GET /api/compositions/
```

###### PROTECTION

This route requires to provide a valid normal access token.

###### SUCCESS RESPONSE

```
[{
  // ... list of all documents
}]
```

### Get a specific composition

###### HTTP REQUEST

```
GET /api/compositions/:id
```

###### PROTECTION

This route requires to provide a valid normal access token.

###### SUCCESS RESPONSE

```
{
  // ... specific composition document
}
```

### Create composition

###### HTTP REQUEST

```
POST /api/compositions/:id
```

###### PROTECTION

This route requires to provide a valid normal access token.

###### SUCCESS RESPONSE

```
{
  // ... new composition document
}
```

### Update composition

###### HTTP REQUEST

```
PUT /api/compositions/:id
```

###### PROTECTION

This route requires to provide a valid normal access token.

###### SUCCESS RESPONSE

```
{
  // ... updated composition document
}
```

### Delete composition

###### HTTP REQUEST

```
DELETE /api/compositions/:id
```

###### PROTECTION

This route requires to provide a valid normal access token.

###### SUCCESS RESPONSE

```
{
  ok: true,
  id: '',// id of the deleted document
  rev: '',// rev of the deleted document
}
```

### Montages (assemblages of compositions)

### Get all montages

###### HTTP REQUEST

```
GET /api/montages/
```

###### SUCCESS RESPONSE

```
[{
  // ... list of documents
}]
```

###### PROTECTION

This route requires to provide a valid normal access token.

### Get specific montage

###### HTTP REQUEST

```
GET /api/montages/:id
```

###### PROTECTION

This route requires to provide a valid normal access token.

###### SUCCESS RESPONSE

```
{
  // ... specific montage document
}
```

### Create montage

###### HTTP REQUEST

```
POST /api/montages/:id
```

###### PROTECTION

This route requires to provide a valid normal access token.

###### SUCCESS RESPONSE

```
{
  // ... new montage document
}
```

### Update montage

###### HTTP REQUEST

```
PUT /api/montages/:id
```

###### SUCCESS RESPONSE

```
{
  // ... updated montage document
}
```

###### PROTECTION

This route requires to provide a valid normal access token.

### Delete montage

###### HTTP REQUEST

```
DELETE /api/montages/:id
```

###### SUCCESS RESPONSE

```
{
  ok: true,
  id: '',// id of the deleted document
  rev: '',// rev of the deleted document
}
```

###### PROTECTION

This route requires to provide a valid normal access token.

### Diffusions of montages

### Get all diffusions

###### HTTP REQUEST

```
GET /api/diffusions/
```

###### PROTECTION

This route requires to provide a valid normal access token.

###### SUCCESS RESPONSE

```
[{
  // ... list of documents
}]
```

### Get a specific diffusion

###### HTTP REQUEST

```
GET /api/diffusions/:id
```

###### PROTECTION

This route requires to provide a valid normal access token.

###### SUCCESS RESPONSE

```
{
  // ... specific diffusion document
}
```

### Create diffusion

###### HTTP REQUEST

```
POST /api/diffusions/:id
```

###### PROTECTION

This route requires to provide a valid normal access token.

###### SUCCESS RESPONSE

```
{
  // ... new diffusion document
}
```

### Update diffusion

###### HTTP REQUEST

```
PUT /api/diffusions/:id
```

###### SUCCESS RESPONSE

```
{
  // ... updated diffusion document
}
```

###### PROTECTION

This route requires to provide a valid normal access token.

### Delete diffusion

###### HTTP REQUEST

```
DELETE /api/diffusions/:id
```


###### SUCCESS RESPONSE

```
{
  ok: true,
  id: '',// id of the deleted document
  rev: '',// rev of the deleted document
}
```

###### PROTECTION

This route requires to provide a valid normal access token.

### Deliverables (static generated files)

### Get all deliverables

###### HTTP REQUEST

```
GET /api/deliverables/
```

###### PROTECTION

This route requires to provide a valid normal access token.

###### SUCCESS RESPONSE

```
[{
  // ... list of deliverable documents
}]
```

### Get a specific deliverable

###### HTTP REQUEST

```
GET /api/deliverables/:id
```

###### PROTECTION

This route requires to provide a valid normal access token.

###### SUCCESS RESPONSE

```
{
  // ... specific deliverable document
}
```

### Create deliverable

###### HTTP REQUEST

```
POST /api/deliverables/:id
```

###### PROTECTION

This route requires to provide a valid normal access token.

###### SUCCESS RESPONSE

```
{
  // ... new deliverable document
}
```

### Update deliverable

###### HTTP REQUEST

```
PUT /api/deliverables/:id
```

###### SUCCESS RESPONSE

```
{
  // ... updated deliverable document
}
```

###### PROTECTION

This route requires to provide a valid normal access token.

### Delete deliverable

###### HTTP REQUEST

```
DELETE /api/deliverables/:id
```


###### SUCCESS RESPONSE

```
{
  ok: true,
  id: '',// id of the deleted document
  rev: '',// rev of the deleted document
}
```

###### PROTECTION

This route requires to provide a valid normal access token.

### Get deliverable attachment file

###### HTTP REQUEST

```
GET /api/deliverables/:id/:filename
```

###### SUCCESS RESPONSE

```
binary data of the attachment
```

###### PROTECTION

This route requires to provide a valid normal access token.

## Microservices

### Html to Image generator

###### HTTP REQUEST

```
POST /services/html2img
```

###### PROTECTION

This route requires to provide a valid normal access token.

###### SUCCESS RESPONSE

```
binary image data
```

### Global operations on the database (dump-related)

#### Download zip dump

###### HTTP REQUEST

```
GET /dump/
```

###### SUCCESS RESPONSE

```
binary zip data
```

###### PROTECTION

This route requires to provide a valid normal access token.

#### Reinitialize data with a zip dump

###### HTTP REQUEST

```
POST /dump/
```

###### PROTECTION

This route requires to provide a valid normal access token.

###### SUCCESS RESPONSE

```
{
  status: 'ok'
}
```

#### Delete all content data

###### HTTP REQUEST

```
DELETE /dump/
```

###### PROTECTION

This route requires to provide a valid normal access token.

###### SUCCESS RESPONSE

```
{
  status: 'ok'
}
```

### Public data provider

#### Publicly get montage data

###### HTTP REQUEST

```
POST /services/data-provider/montage/:id
```

###### PROTECTION

This route is not protected.

###### SUCCESS RESPONSE

```
{
  // ... montage data
}
```

#### Publicly get asset attachment

###### HTTP REQUEST

```
POST /services/data-provider/asset/:id
```

###### PROTECTION

This route is not protected.

###### SUCCESS RESPONSE

```
binary data of the asset attachment
```

## Dependencies

- [ajv](https://github.com/epoberezkin/ajv): Another JSON Schema Validator
- [archiver](https://github.com/archiverjs/node-archiver): a streaming interface for archive generation
- [axios](https://github.com/axios/axios): Promise based HTTP client for the browser and node.js
- [babel-runtime](https://github.com/babel/babel/tree/master/packages): babel selfContained runtime
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js): A bcrypt library for NodeJS.
- [better-npm-run](https://github.com/benoror/better-npm-run): Better NPM scripts runner
- [bluebird](https://github.com/petkaantonov/bluebird): Full featured Promises/A+ implementation with exceptionally good performance
- [bunyan-debug-stream](https://github.com/benbria/bunyan-debug-stream): Output stream for Bunyan which prints human readable logs.
- [cors](https://github.com/expressjs/cors): Node.js CORS middleware
- [debug](https://github.com/visionmedia/debug): small debugging utility
- [epub-gen](https://github.com/cyrilis/epub-gen): A library to generate EPUB from HTML
- [express](https://github.com/expressjs/express): Fast, unopinionated, minimalist web framework
- [express-bunyan-logger](https://github.com/villadora/express-bunyan-logger): a bunyan logger middleware for express
- [express-promise](https://github.com/luin/express-promise): An [express.js](http://expressjs.com) middleware for easy rendering async query.
- [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin): Extract text from bundle into a file.
- [fb](https://github.com/node-facebook/facebook-node-sdk): NodeJS Library for Facebook
- [formidable](https://github.com/felixge/node-formidable): A node.js module for parsing form data, especially file uploads.
- [fs-extra](https://github.com/jprichardson/node-fs-extra): fs-extra contains methods that aren&#39;t included in the vanilla Node.js fs package. Such as mkdir -p, cp -r, and rm -rf.
- [json-schema-defaults](https://github.com/chute/json-schema-defaults): Generate JSON object from default values in JSON Schema
- [json-schema-ref-parser](https://github.com/BigstickCarpet/json-schema-ref-parser): Parse, Resolve, and Dereference JSON Schema $ref pointers
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken): JSON Web Token implementation (symmetric and asymmetric)
- [lodash](https://github.com/lodash/lodash): Lodash modular utilities.
- [lodash-addons](https://github.com/helion3/lodash-addons): Community mixins for lodash
- [mime-types](https://github.com/jshttp/mime-types): The ultimate javascript content-type utility.
- [nano](https://github.com/apache/couchdb-nano): The official CouchDB client for Node.js
- [nodemailer](https://github.com/nodemailer/nodemailer): Easy as cake e-mail sending from your Node.js applications
- [metis-schemas](git+https://github.com/robindemourat/metis-backend.git): Multimodal publishing schemas
- [metis-shared](git+https://github.com/robindemourat/metis-backend.git): Collection of metis elements being used accross apps
- [pm2](https://github.com/Unitech/pm2): Production process manager for Node.JS applications with a built-in load balancer.
- [prince](https://github.com/rse/node-prince): Node API for executing XML/HTML to PDF renderer PrinceXML via prince(1) CLI
- [react](https://github.com/facebook/react): React is a JavaScript library for building user interfaces.
- [react-citeproc](https://github.com/robindemourat/react-citeproc): react wrapping components for csl-based citations
- [react-dom](https://github.com/facebook/react): React package for working with the DOM.
- [twit](https://github.com/ttezel/twit): Twitter API client for node (REST &amp; Streaming)
- [unzipper](https://github.com/ZJONSSON/node-unzipper): Unzip cross-platform streaming API
- [uuid](https://github.com/kelektiv/node-uuid): RFC4122 (v1, v4, and v5) UUIDs
- [webshot](https://github.com/brenden/node-webshot): Easy website screenshots

## Dev Dependencies

- [babel-cli](https://github.com/babel/babel/tree/master/packages): Babel command line.
- [babel-core](https://github.com/babel/babel/tree/master/packages): Babel compiler core.
- [babel-eslint](https://github.com/babel/babel-eslint): Custom parser for ESLint
- [babel-loader](https://github.com/babel/babel-loader): babel module loader for webpack
- [babel-plugin-istanbul](https://github.com/istanbuljs/babel-plugin-istanbul): A babel plugin that adds istanbul instrumentation to ES6 code
- [babel-plugin-transform-class-properties](https://github.com/babel/babel/tree/master/packages): This plugin transforms static class properties as well as properties declared with the property initializer syntax
- [babel-plugin-transform-decorators](https://github.com/babel/babel/tree/master/packages): Compile class and object decorators to ES5
- [babel-plugin-transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy): A plugin for Babel 6 that (mostly) replicates the old decorator behavior from Babel 5.
- [babel-plugin-transform-object-rest-spread](https://github.com/babel/babel/tree/master/packages): Compile object rest and spread to ES5
- [babel-plugin-transform-runtime](https://github.com/babel/babel/tree/master/packages): Externalise references to helpers and builtins, automatically polyfilling your code without polluting globals
- [babel-polyfill](https://github.com/babel/babel/tree/master/packages): Provides polyfills necessary for a full ES2015+ environment
- [babel-preset-es2015](https://github.com/babel/babel/tree/master/packages): Babel preset for all es2015 plugins.
- [babel-preset-react](https://github.com/babel/babel/tree/master/packages): Babel preset for all React plugins.
- [babel-preset-stage-0](https://github.com/babel/babel/tree/master/packages): Babel preset for stage 0 plugins
- [babel-register](https://github.com/babel/babel/tree/master/packages): babel require hook
- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [coveralls](https://github.com/nickmerwin/node-coveralls): takes json-cov output into stdin and POSTs to coveralls.io
- [cross-env](https://github.com/kentcdodds/cross-env): Run scripts that set and use environment variables across platforms
- [esdoc](https://github.com/esdoc/esdoc): Good Documentation Generator For JavaScript
- [esdoc-ecmascript-proposal-plugin](https://github.com/esdoc/esdoc-plugins): A ECMAScript proposal plugin for ESDoc
- [esdoc-publish-markdown-plugin](https://github.com/esdoc/esdoc-plugins): A publish markdown plugin for ESDoc [PoC]
- [eslint](https://github.com/eslint/eslint): An AST-based pattern checker for JavaScript.
- [eslint-config-standard](https://github.com/feross/eslint-config-standard): JavaScript Standard Style - ESLint Shareable Config
- [eslint-plugin-babel](https://github.com/babel/eslint-plugin-babel): an eslint rule plugin companion to babel-eslint
- [eslint-plugin-mocha](https://github.com/lo1tuma/eslint-plugin-mocha): Eslint rules for mocha.
- [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node): Additional ESLint&#39;s rules for Node.js
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise): Enforce best practices for JavaScript promises
- [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security): Security rules for eslint
- [eslint-plugin-standard](https://github.com/xjamundx/eslint-plugin-standard): ESlint Plugin for the Standard Linter
- [istanbul](https://github.com/gotwarlost/istanbul): Yet another JS code coverage tool that computes statement, line, function and branch coverage with module loader hooks to transparently add coverage when running tests. Supports all JS coverage use cases including unit tests, server side functional tests and browser tests. Built for scale
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [nodemon](https://github.com/remy/nodemon): Simple monitor script for use during development of a node.js app.
- [nyc](https://github.com/istanbuljs/nyc): the Istanbul command line interface
- [pre-commit](https://github.com/observing/pre-commit): Automatically install pre-commit hooks for your npm modules.
- [webpack](https://github.com/webpack/webpack): Packs CommonJs/AMD modules for the browser. Allows to split your codebase into multiple bundles, which can be loaded on demand. Support loaders to preprocess files, i.e. json, jade, coffee, css, less, ... and your custom stuff.


## License

LGPL-3

CECCIL-C

