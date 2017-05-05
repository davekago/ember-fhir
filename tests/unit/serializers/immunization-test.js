import { moduleForModel, test } from 'ember-qunit';

moduleForModel('immunization', 'Unit | Serializer | Immunization', {
  needs: [
    'serializer:immunization',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:quantity',
    'model:immunization-practitioner',
    'model:annotation',
    'model:immunization-explanation',
    'model:immunization-reaction',
    'model:immunization-vaccination-protocol',
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension'
  ]
});

test('it serializes records', function(assert) {
  const record = this.subject(),
    serializeRecord = record.serialize();

  assert.ok(serializeRecord);
});