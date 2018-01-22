/**
 * This module provides an entrypoint to the assets component of the applications
 * @module metis-backend/components/assets
 */

// user-related db views
export design from './assets.design';
// view controller
export * as controller from './assets.controller';
// database abstraction layer operations
export * as dal from './assets.dal';
// api / routes bindings
export api from './assets.api';
