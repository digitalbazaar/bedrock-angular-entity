/*!
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

import angular from 'angular';
import * as bedrock from 'bedrock-angular';
import HomeComponent from './home-component';

const module = angular.module('bedrock-angular-entity-dev', [
  'bedrock.entity', 'ngError', 'ngMaterial', 'ngMessages']);
module.component('baetHome', HomeComponent);

bedrock.setRootModule(module);

/* @ngInject */
module.config($routeProvider => {
  $routeProvider
    .when('/', {
      title: 'Bedrock Angular Entity Tester',
      template: '<baet-home></baet-home>'
    });
});
