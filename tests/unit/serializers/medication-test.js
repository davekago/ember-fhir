import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication', 'Unit | Serializer | Medication', {
  needs: [
    'serializer:medication',
    'model:codeable-concept',
    'model:reference',
    'model:medication-ingredient',
    'model:medication-package',
    'model:attachment',
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