import { moduleForModel, test } from 'ember-qunit';

moduleForModel('substance-ingredient', 'Unit | Serializer | Substance_Ingredient', {
  needs: [
    'serializer:substance-ingredient',
    'model:ratio',
    'model:codeable-concept',
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