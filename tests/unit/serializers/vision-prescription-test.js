import { moduleForModel, test } from 'ember-qunit';

moduleForModel('vision-prescription', 'Unit | Serializer | VisionPrescription', {
  needs: [
    'serializer:vision-prescription',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:vision-prescription-dispense',
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