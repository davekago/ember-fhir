import { moduleForModel, test } from 'ember-qunit';

moduleForModel('nutrition-order-administration', 'Unit | Serializer | NutritionOrder_Administration', {
  needs: [
    'serializer:nutrition-order-administration',
    'model:timing',
    'model:quantity',
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