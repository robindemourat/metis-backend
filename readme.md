Plurishing-server
===

Plurishing-server is the main backend application used to run the `plurishing` experimental plateform for multimodal publishing.

The app is an express app allowing to interact with a `couchdb` database storing different types of objects relating to the experiment, and also to provide some microservices used by other applications.

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

