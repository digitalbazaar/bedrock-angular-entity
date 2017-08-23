/*!
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
import angular from 'angular';
import EntityComponent from './entity-component.js';

'use strict';

const module = angular.module(
  'bedrock.entity', ['bedrock.form', 'ngMaterial', 'ngMessages']);

module.component('brEntity', EntityComponent);
