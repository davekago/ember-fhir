import { moduleForModel, test } from 'ember-qunit';

moduleForModel('nutrition-order-oral-diet', 'Unit | Serializer | NutritionOrder_OralDiet', {
  needs: [
    'serializer:nutrition-order-oral-diet',
    'model:codeable-concept',
    'model:timing',
    'model:nutrition-order-nutrient',
    'model:nutrition-order-texture',
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