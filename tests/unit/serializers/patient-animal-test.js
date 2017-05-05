import { moduleForModel, test } from 'ember-qunit';

moduleForModel('patient-animal', 'Unit | Serializer | Patient_Animal', {
  needs: [
    'serializer:patient-animal',
    'model:codeable-concept',
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