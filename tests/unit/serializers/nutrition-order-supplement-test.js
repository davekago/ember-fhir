import { moduleForModel, test } from 'ember-qunit';

moduleForModel('nutrition-order-supplement', 'Unit | Serializer | NutritionOrder_Supplement', {
  needs: [
    'serializer:nutrition-order-supplement',
    'model:codeable-concept',
    'model:timing',
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