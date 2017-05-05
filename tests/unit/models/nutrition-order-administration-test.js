import { moduleForModel, test } from 'ember-qunit';

moduleForModel('nutrition-order-administration', 'Unit | Model | NutritionOrder_Administration', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:timing',
    'model:quantity',
    'model:ratio'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});