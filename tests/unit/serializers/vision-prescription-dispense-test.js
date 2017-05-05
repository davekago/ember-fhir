import { moduleForModel, test } from 'ember-qunit';

moduleForModel('vision-prescription-dispense', 'Unit | Serializer | VisionPrescription_Dispense', {
  needs: [
    'serializer:vision-prescription-dispense',
    'model:codeable-concept',
    'model:quantity',
    'model:annotation',
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