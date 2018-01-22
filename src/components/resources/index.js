/**
 * This module provides an entrypoint to the resources component of the applications
 * @module metis-backend/components/resources
 */

// resource-related db views
export design from './resources.design';
// view controller
export * as controller from './resources.controller';
// database abstraction layer operations
export * as dal from './resources.dal';
// api / routes bindings
export api from './resources.api';
