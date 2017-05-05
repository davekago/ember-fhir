import { moduleForModel, test } from 'ember-qunit';

moduleForModel('patient-communication', 'Unit | Serializer | Patient_Communication', {
  needs: [
    'serializer:patient-communication',
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