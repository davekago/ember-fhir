import { moduleForModel, test } from 'ember-qunit';

moduleForModel('immunization-practitioner', 'Unit | Serializer | Immunization_Practitioner', {
  needs: [
    'serializer:immunization-practitioner',
    'model:codeable-concept',
    'model:reference',
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