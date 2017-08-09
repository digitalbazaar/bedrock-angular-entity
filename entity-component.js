/*!
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

export default {
  bindings: {
    schema: '<brEntitySchema',
    template: '<?brEntityTemplate',
    onChange: '<brOnChange'
  },
  controller: Ctrl,
  templateUrl: 'bedrock-angular-entity/entity-component.html'
};

/* @ngInject */
function Ctrl() {
  const self = this;

  self.$onInit = () => {
    self.entity = {};

    if(!self.template) {
      self.template = 'bedrock-angular-entity/single-column-layout.html';
    }
  };

  console.log("EC GOT BINDINGS", self);
}
