import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication-ingredient', 'Unit | Serializer | Medication_Ingredient', {
  needs: [
    'serializer:medication-ingredient',
    'model:codeable-concept',
    'model:reference',
    'model:ratio',
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