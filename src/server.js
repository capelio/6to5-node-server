/*
 * Dependencies
 */

import fs from 'fs';
import path from 'path';
import toml from 'toml';
import * as server from './lib';

/*
 * Build the config and start the server
 */

let configFile = fs.readFileSync(path.join(__dirname, 'config.toml'));

let config = toml.parse(configFile);

server.start(config, () => {
  console.log('Server started');
});
