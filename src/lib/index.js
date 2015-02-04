/*
 * Dependencies
 */

import * as lib from './library';

/*
 * Module API
 */

export function start (config, callback) {
  lib.method(config);

  console.log('Starting server...');

  callback();
};
