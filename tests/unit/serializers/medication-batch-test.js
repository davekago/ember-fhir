import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication-batch', 'Unit | Serializer | Medication_Batch', {
  needs: [
    'serializer:medication-batch',
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