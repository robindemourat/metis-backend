Metis-server
===

Metis-server is the main backend application used to run the `metis` experimental plateform for multimodal publishing.

The app is an express app allowing to interact with a `couchdb` database storing different types of objects relating to the experiment, and also to provide some microservices used by other applications.

# Installation

You have to install [PrinceXMl](https://www.princexml.com/) bin on your server machine in addition to the node app.

Once you have Prince installed, here is the procedure for the server installation:

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

## Setup couchdb in development

The app is configured to use [`couchdb`](http://couchdb.apache.org/) technology as database.

To have the app working, you must install couchdb and run it locally. On a mac, it is done this way :

```
brew services start couchdb
```

# Development and usage

```
# run in dev mode (dev config, hot reloading)
npm run dev

# run in prod mod
npm run start

# monitor processes and error in prod mode (with pm2)
npm run monitor

# lint code
npm run lint

# lint code while applying autofixes
npm run lint:fix

# bootstrap admin user (dev mode)
npm run populate-db:dev

# bootstrap admin user (prod mode)
npm run populate-db

# run tests with mocha
npm run test

# run tests with mocha and rerun when source is modified
npm run test:watch

# check test coverage
npm run cov

# build automated documentation with esdoc
npm run doc

# build code for production (with babel)
npm run build

# deploy to heroku (push and set env variables)
npm run deploy:heroku
```

# Deployment

Please note you have to set a series of env variables in production mode.



# Application endpoints

## Authentification-related routes

### Signup

###### DESCRIPTION

###### HTTP REQUEST

```
POST /sign-up
```


### Login

###### DESCRIPTION

###### HTTP REQUEST

```
POST /login
```

### Password reset

###### DESCRIPTION

###### HTTP REQUEST

```
POST /request-password-reset
```

## Interface to the database documents

### Get all users

###### DESCRIPTION

###### HTTP REQUEST

```
GET /api/users/
```

### Get a specific user

###### DESCRIPTION

###### HTTP REQUEST

```
GET /api/users/:id
```

### Create user

###### DESCRIPTION

###### HTTP REQUEST

```
POST /api/users/:id
```

### Update user

###### DESCRIPTION

###### HTTP REQUEST

```
PUT /api/users/:id
```

### Delete user

###### DESCRIPTION

###### HTTP REQUEST

```
DELETE /api/users/:id
```

### Change password

###### DESCRIPTION

###### HTTP REQUEST

```
POST /api/users/change-password
```

### Assets

### Get all assets

###### DESCRIPTION

###### HTTP REQUEST

```
GET /api/assets/
```

### Get specific asset

###### DESCRIPTION

###### HTTP REQUEST

```
GET /api/assets/:id
```

### Create asset

###### DESCRIPTION

###### HTTP REQUEST

```
POST /api/assets/:id
```

### Update asset

###### DESCRIPTION

###### HTTP REQUEST

```
PUT /api/assets/:id
```

### Delete asset

###### DESCRIPTION

###### HTTP REQUEST

```
DELETE /api/assets/:id
```

### Get asset attached file

###### DESCRIPTION

###### HTTP REQUEST

```
GET /api/assets/:id/:filename
```

### Resources

### Get all resources

###### DESCRIPTION

###### HTTP REQUEST

```
GET /api/resources/
```

### Get specific resource

###### DESCRIPTION

###### HTTP REQUEST

```
GET /api/resources/:id
```

### Create resource

###### DESCRIPTION

###### HTTP REQUEST

```
POST /api/resources/:id
```

### Update resource

###### DESCRIPTION

###### HTTP REQUEST

```
PUT /api/resources/:id
```

### Delete resource

###### DESCRIPTION

###### HTTP REQUEST

```
DELETE /api/resources/:id
```

### Compositions

### Get all compositions

###### DESCRIPTION

###### HTTP REQUEST

```
GET /api/compositions/
```

### Get a specific composition

###### DESCRIPTION

###### HTTP REQUEST

```
GET /api/compositions/:id
```

### Create composition

###### DESCRIPTION

###### HTTP REQUEST

```
POST /api/compositions/:id
```

### Create composition

###### DESCRIPTION

###### HTTP REQUEST

```
PUT /api/compositions/:id
```

### Update composition

###### DESCRIPTION

###### HTTP REQUEST

```
DELETE /api/compositions/:id
```


### Montages (assemblages of compositions)

### Get all montages

###### DESCRIPTION

###### HTTP REQUEST

```
GET /api/montages/
```

### Get specific montage

###### DESCRIPTION

###### HTTP REQUEST

```
GET /api/montages/:id
```

### Create montage

###### DESCRIPTION

###### HTTP REQUEST

```
POST /api/montages/:id
```

### Update montage

###### DESCRIPTION

###### HTTP REQUEST

```
PUT /api/montages/:id
```

### Delete montage

###### DESCRIPTION

###### HTTP REQUEST

```
DELETE /api/montages/:id
```

### Diffusions of montages

### Get all diffusions

###### DESCRIPTION

###### HTTP REQUEST

```
GET /api/diffusions/
```

### Get a specific diffusion

###### DESCRIPTION

###### HTTP REQUEST

```
GET /api/diffusions/:id
```

### Create diffusion

###### DESCRIPTION

###### HTTP REQUEST

```
POST /api/diffusions/:id
```

### Update diffusion

###### DESCRIPTION

###### HTTP REQUEST

```
PUT /api/diffusions/:id
```

### Delete diffusion

###### DESCRIPTION

###### HTTP REQUEST

```
DELETE /api/diffusions/:id
```

### Deliverables (static generated files)

### Get all deliverables

###### DESCRIPTION

###### HTTP REQUEST

```
GET /api/deliverables/
```

### Get a specific deliverable

###### DESCRIPTION

###### HTTP REQUEST

```
GET /api/deliverables/:id
```

### Create deliverable

###### DESCRIPTION

###### HTTP REQUEST

```
POST /api/deliverables/:id
```

### Update deliverable

###### DESCRIPTION

###### HTTP REQUEST

```
PUT /api/deliverables/:id
```

### Delete deliverable

###### DESCRIPTION

###### HTTP REQUEST

```
DELETE /api/deliverables/:id
```

### Get deliverable attachment file

###### DESCRIPTION

###### HTTP REQUEST

```
GET /api/deliverables/:id/:filename
```

## Microservices

### Html to Image generator

###### DESCRIPTION

###### HTTP REQUEST

```
POST /services/html2img
```

### Global operations on the database (dump-related)

#### Download zip dump

###### DESCRIPTION

###### HTTP REQUEST

```
GET /dump/
```

#### Reinitialize data with a zip dump

###### DESCRIPTION

###### HTTP REQUEST

```
POST /dump/
```

#### Delete all content data

###### DESCRIPTION

###### HTTP REQUEST

```
DELETE /dump/
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

