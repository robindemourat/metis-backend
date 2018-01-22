/**
 * This script creates an admin superuser in application's database
 */

/* eslint no-console : 0 */
import {hash} from './crypto';

import db from './plugDb';

import {getConfig} from './config';
const {adminPassword, adminEmail} = getConfig();

// admin object
const admin = {
  type: 'user',
  name: 'admin',
  password: adminPassword,
  admin: true,
  email: adminEmail
};

const addAdmin = doc => {
  let _rev;
  if (doc) {
    _rev = doc._rev;
  }
  hash(admin.password)
  .then(password =>
    db.insertAsync({
      ...admin,
      _rev,
      password
    }, 'admin')
  )
  .then(info => {
    console.info('created admin', info);
  })
  .catch(error => {
    console.info('error while creating admin', error);
  });
};

// create or update admin
db.getAsync('admin')
  .then(addAdmin)
  .catch(addAdmin);
