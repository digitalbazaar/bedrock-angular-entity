/*!
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
import angular from 'angular';
import * as bedrock from 'bedrock-angular';
import EntityComponent from './entity-component';

'use strict';

const module = angular.module('bedrock.entity', []);
module.component('brEntity', EntityComponent);
