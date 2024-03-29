/**
 * This module provides an entrypoint to the montages component of the applications
 * @module metis-backend/components/montages
 */

// montage-related db views
export design from './montages.design';
// view controller
export * as controller from './montages.controller';
// database abstraction layer operations
export * as dal from './montages.dal';
// api / routes bindings
export api from './montages.api';
