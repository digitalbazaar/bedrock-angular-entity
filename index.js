/*!
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
import angular from 'angular';
import EntityComponent from './entity-component';

'use strict';

const module = angular.module('bedrock.entity', ['bedrock.form']);
module.component('brEntity', EntityComponent);
