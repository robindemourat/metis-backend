/**
 * This module provides an entrypoint to the deliverables component of the applications
 * @module metis-backend/components/deliverables
 */

// user-related db views
export design from './deliverables.design';
// view controller
export * as controller from './deliverables.controller';
// database abstraction layer operations
export * as dal from './deliverables.dal';
// api / routes bindings
export api from './deliverables.api';
