/**
 * This module provides an entrypoint to the diffusions component of the applications
 * @module metis-backend/components/diffusions
 */

// diffusion-related db views
export design from './diffusions.design';
// view controller
export * as controller from './diffusions.controller';
// database abstraction layer operations
export * as dal from './diffusions.dal';
// api / routes bindings
export api from './diffusions.api';
