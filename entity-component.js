/*!
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

export default {
  bindings: {
    defaults: '<?brDefaults',
    schema: '<brEntitySchema',
    template: '<?brEntityTemplate',
    valid: '=brValid',
    onChange: '&brOnChange',
    readOnly: '<?brReadOnly'
  },
  controller: Ctrl,
  templateUrl: 'bedrock-angular-entity/entity-component.html'
};

/* @ngInject */
function Ctrl($scope) {
  const self = this;

  self.$onInit = () => {
    self.readOnly = !!self.readOnly;
    self.entity = self.defaults || {};

    if(!self.template) {
      self.template = 'bedrock-angular-entity/single-column-layout.html';
    }

    // watch entity and fire onChange when it updates w/ a valid change
    $scope.$watch(() => {
      return self.entity;
    }, entity => {
      if(entity === undefined || self.form === undefined) {
        return;
      }

      // clean undefined values before returning
      Object.keys(entity).forEach(key =>
        (entity[key] == undefined) && delete entity[key]);
      self.valid = !self.form.$invalid;
      self.onChange({entity});
    }, true);
  };
}
