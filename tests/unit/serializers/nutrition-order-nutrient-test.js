import { moduleForModel, test } from 'ember-qunit';

moduleForModel('nutrition-order-nutrient', 'Unit | Serializer | NutritionOrder_Nutrient', {
  needs: [
    'serializer:nutrition-order-nutrient',
    'model:codeable-concept',
    'model:quantity',
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