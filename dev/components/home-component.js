/*!
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

export default {
  controller: Ctrl,
  templateUrl: 'bedrock-angular-entity-dev/home-component.html'
};

/* @ngInject */
function Ctrl() {
  const self = this;
  self.schema = {
    '@context': 'https://w3id.org/flexform/v1',
    id: 'https://example.org/forms/1',
    type: ['EntitySchema', 'PersonSchema'],
    // label to display for entity schema
    label: 'Person',
    attribute: [{
      label: 'Name',
      modelProperty: 'name',
      dataType: 'ShortString', // or 'LongString'
      description: 'The full name of the entity.',
      validation: {
        required: true,
        minLength: 8,
        maxLength: 100,
        regex: '^Foo.*'
      }
    }, {
      label: 'Age',
      modelProperty: 'age',
      dataType: 'Number',  // or 'Decimal' or 'Integer'
      description: 'The age of the entity.',
      validation: {
        required: false,
        minValue: 0,
        maxValue: 140
      }
    }, {
      label: 'Pet',
      modelProperty: 'desiredPet',
      dataType: 'ShortString',
      description: 'What kind of pet do you want?',
      option: [{
        label: 'Cat',
        value: 'Feline'
      }, {
        label: 'Dog',
        value: 'Canine'
      }, {
        label: 'Dragon',
        value: 'Rawr'
      }]
    }]
  };
  self.template = 'https://example.org/template.html',

  self.onChange = entity => {
    console.log("Entity change detected:", entity);
  };
}
