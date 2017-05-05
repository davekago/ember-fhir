import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication-package', 'Unit | Serializer | Medication_Package', {
  needs: [
    'serializer:medication-package',
    'model:codeable-concept',
    'model:medication-content',
    'model:medication-batch',
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