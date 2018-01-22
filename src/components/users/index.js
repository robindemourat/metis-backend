/**
 * This module provides an entrypoint to the users component of the applications
 * @module metis-backend/components/users
 */

// user-related db views
export design from './users.design';
// view controller
export * as controller from './users.controller';
// database abstraction layer operations
export * as dal from './users.dal';
// api / routes bindings
export api from './users.api';
