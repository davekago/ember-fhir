import { moduleForModel, test } from 'ember-qunit';

moduleForModel('codeable-concept', 'Unit | Serializer | CodeableConcept', {
  needs: [
    'serializer:codeable-concept',
    'model:coding',
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