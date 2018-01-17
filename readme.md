Plurishing-server
===

Plurishing-server is the main backend application used to run the `plurishing` experimental plateform for multimodal publishing.

The app is an express app allowing to interact with a `couchdb` database storing different types of objects relating to the experiment, and also to provide some microservices used by other applications.

# API

## Authentification-related routes

```
POST /request-password-reset
```

```
POST /sign-up
```

```
POST /login
```

## Interface to the database documents

```
GET /api/users/
```

```
GET /api/users/:id
```

```
POST /api/users/:id
```

```
PUT /api/users/:id
```

```
DELETE /api/users/:id
```

```
POST /api/users/change-password
```

### Assets

```
GET /api/assets/
```

```
GET /api/assets/:id
```

```
POST /api/assets/:id
```

```
PUT /api/assets/:id
```

```
DELETE /api/assets/:id
```

```
GET /api/assets/:id/:filename
```

### Resources

```
GET /api/resources/
```

```
GET /api/resources/:id
```

```
POST /api/resources/:id
```

```
PUT /api/resources/:id
```

```
DELETE /api/resources/:id
```

### Compositions

```
GET /api/compositions/
```

```
GET /api/compositions/:id
```

```
POST /api/compositions/:id
```

```
PUT /api/compositions/:id
```

```
DELETE /api/compositions/:id
```


### Montages (assemblages of compositions)

```
GET /api/montages/
```

```
GET /api/montages/:id
```

```
POST /api/montages/:id
```

```
PUT /api/montages/:id
```

```
DELETE /api/montages/:id
```

### Diffusions of montages

```
GET /api/diffusions/
```

```
GET /api/diffusions/:id
```

```
POST /api/diffusions/:id
```

```
PUT /api/diffusions/:id
```

```
DELETE /api/diffusions/:id
```

### Deliverables (static generated files)

```
GET /api/deliverables/
```

```
GET /api/deliverables/:id
```

```
POST /api/deliverables/:id
```

```
PUT /api/deliverables/:id
```

```
DELETE /api/deliverables/:id
```

```
GET /api/deliverables/:id/:filename
```


## Microservices

### Html to Image generator

```
POST /services/html2img
```

### Global operations on the database (dump-related)

```
GET /dump/
```

```
POST /dump/
```

```
DELETE /dump/
```

### Unprotected data provider

These routes do not require authentification.

```
GET /services/data-provider/montage/:id
```

```
GET /services/data-provider/asset/:id
```


# Installation

```
# clone repo
git clone https://github.com/robindemourat/plurishing-backend
cd plurishing-backend
# install dependencies
npm install
# setup dev config
cp config/config.dev.sample.js config/config.dev.js
# ... fill with your specific dev config
# setup prod config
cp config/config.prod.sample.js config/config.prod.js
# ... fill with your specific prod config
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

