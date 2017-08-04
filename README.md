# bedrock-angular-entity

The Bedrock Entity module enables an entity schema to be described using
JSON, a UI to be dynamically built from the entity schema, and data to be
input based on the  UI. The data from the entity data model may then be
serialized to a data structure such as JSON-LD using an external process.

## Usage

```html
<br-entity
  br-entity-schema="$ctrl.entitySchema"
  br-entity-model="$ctrl.entityData"
  br-entity-template="$ctrl.entityTemplate"
  br-on-change="$ctrl.onSave(entityData)">
</br-entity>
```

## Entity Schema

```javascript
// An example Entity Schema
{
  '@context': 'https://w3id.org/flexform/v1',
  id: config.server.baseUri + '/forms/1',
  type: [
    'EntitySchema',
    'StormwaterSiteForm'
  ],
  // label to display for entity schema
  label: 'Stormwater Site',
  attribute: [ … array of attribute inputs (see below) … ]
}
```

## Attribute Input Types

### String Attribute

```javascript
{
  label: 'Name',
  modelProperty: 'name',
  dataType: 'ShortString' // or 'LongString'
}
```

### Number Attribute

```javascript
{
  label: 'Age',
  modelProperty: 'age',
  dataType: 'Integer'  // or 'Decimal' or 'Number'
}
```

### Geolocation Attribute

```javascript
{
  label: 'Location',
  modelProperty: ‘location’,
  dataType: ‘Location’,
  valueSchema: {
    attribute: [{
      label: ‘Latitude’,
      modelProperty: 'latitude',
      dataType: 'Decimal'
    }, {
      label: ‘Longitude’,
      modelProperty: ‘longitude’,
      dataType: ‘Decimal’
    }]
  }
}
```

### Simple Selection Attribute

```javascript
{
  label: 'Type',
  modelProperty: 'assetType',
  dataType: 'ShortString',
  option: [{
    label: 'Bioretention',
    value: 'BioretentionAsset'
  }, {
    label: 'Filter Strip',
    value: 'FilterStripAsset'
  }, {
    label: 'Infiltration (Basin or Trench)',
    value: 'InfiltrationAsset'
  }, {
    label: 'Manufactured BMP',
    value: 'ManufacturedBmpAsset'
  }, {
    label: 'Permeable Pavement',
    value: 'PermeablePavementAsset'
  }, {
    label: 'Pond (Dry or Wet)',
    value: 'PondAsset'
  }, {
    label: 'Rooftop Runoff',
    value: 'RooftopRunoffAsset'
  }, {
    label: 'Sand Filter (Open or Closed)',
    value: 'SandFilterAsset'
  }, {
    label: 'Underground Detention',
    value: 'UndergroundDetentionAsset'
  }, {
    label: 'Wetland',
    value: 'WetlandAsset'
  }]
}
```

### Complex Selection Attribute

```javascript
{
  label: 'Type',
  modelProperty: 'pickupOrDelivery',
  dataType: 'Object',
  option: [{
    label: 'Delivery',
    valueSchema: {
      attribute: [{
        label: ‘Latitude’,
        modelProperty: 'latitude',
        dataType: 'Decimal'
      }, {
        label: ‘Longitude’,
        modelProperty: ‘longitude’,
        dataType: ‘Decimal’
      }]
    }, {
        label: 'Pickup',
        valueSchema: {
          label: ‘Time’,
          attribute: [{
            modelProperty: ‘pickupTime’,
            dataType: ‘DateTime’
      }]
    }
  }]
}
```

### Date Attribute

```javascript
{
  label: 'Date Implemented',
  modelProperty: 'implementationDate',
  dataType: 'Date'
}
```

### Datetime Attribute

```javascript
{
  label: 'Submission Time',
  modelProperty: 'submitted',
  dataType: 'Datetime'
}
```
