import { moduleForModel, test } from 'ember-qunit';

moduleForModel('nutrition-order', 'Unit | Serializer | NutritionOrder', {
  needs: [
    'serializer:nutrition-order',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:nutrition-order-oral-diet',
    'model:nutrition-order-supplement',
    'model:nutrition-order-enteral-formula',
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