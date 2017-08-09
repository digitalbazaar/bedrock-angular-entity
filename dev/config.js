/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const config = require('bedrock').config;
const path = require('path');

// bedrock-angular-entity pseudo package
const rootPath = path.join(__dirname, '..');
config.views.system.packages.push({
  path: rootPath,
  manifest: path.join(rootPath, 'package.json')
});

// bedrock-angular-entity-dev pseudo package
config.views.system.packages.push({
  path: path.join(rootPath, 'dev', 'components'),
  manifest: path.join(rootPath, 'dev', 'package.json')
});
