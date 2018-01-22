/**
 * This module provides an entrypoint to the compositions component of the applications
 * @module metis-backend/components/compositions
 */

// composition-related db views
export design from './compositions.design';
// view controller
export * as controller from './compositions.controller';
// database abstraction layer operations
export * as dal from './compositions.dal';
// api / routes bindings
export api from './compositions.api';
