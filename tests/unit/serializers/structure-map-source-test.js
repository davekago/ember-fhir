import { moduleForModel, test } from 'ember-qunit';

moduleForModel('structure-map-source', 'Unit | Serializer | StructureMap_Source', {
  needs: [
    'serializer:structure-map-source',
    'model:element',
    'model:extension',
    'model:backbone-element',
    'model:narrative',
    'model:annotation',
    'model:attachment',
    'model:identifier',
    'model:codeable-concept',
    'model:coding',
    'model:quantity',
    'model:duration',
    'model:distance',
    'model:count',
    'model:money',
    'model:age',
    'model:range',
    'model:period',
    'model:ratio',
    'model:reference',
    'model:sampled-data',
    'model:signature',
    'model:human-name',
    'model:address',
    'model:contact-point',
    'model:timing',
    'model:meta',
    'model:element-definition',
    'model:contact-detail',
    'model:contributor',
    'model:dosage',
    'model:related-artifact',
    'model:usage-context',
    'model:data-requirement',
    'model:parameter-definition',
    'model:trigger-definition',
    'model:resource'
  ]
});

test('it serializes records', function(assert) {
  const record = this.subject(),
    serializeRecord = record.serialize();

  assert.ok(serializeRecord);
});