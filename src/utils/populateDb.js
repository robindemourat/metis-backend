/**
 * Plurishing-backend
 * =======
 * Server population script
 */
/* eslint no-console : 0 */
import {hash} from './crypto';

import db from './plugDb';

const admin = {
  type: 'user',
  name: 'admin',
  password: 'admin',
  admin: true,
  email: 'robin.demourat@protonmail.com'
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
    console.log('created admin', info);
  })
  .catch(error => {
    console.log('error while creating admin', error);
  });
};

db.getAsync('admin')
  .then(addAdmin)
  .catch(addAdmin);
