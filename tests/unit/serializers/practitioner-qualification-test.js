import { moduleForModel, test } from 'ember-qunit';

moduleForModel('practitioner-qualification', 'Unit | Serializer | Practitioner_Qualification', {
  needs: [
    'serializer:practitioner-qualification',
    'model:identifier',
    'model:codeable-concept',
    'model:period',
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