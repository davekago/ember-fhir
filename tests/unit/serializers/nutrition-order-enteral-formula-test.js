import { moduleForModel, test } from 'ember-qunit';

moduleForModel('nutrition-order-enteral-formula', 'Unit | Serializer | NutritionOrder_EnteralFormula', {
  needs: [
    'serializer:nutrition-order-enteral-formula',
    'model:codeable-concept',
    'model:quantity',
    'model:nutrition-order-administration',
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