import { moduleForModel, test } from 'ember-qunit';

moduleForModel('nutrition-order-supplement', 'Unit | Model | NutritionOrder_Supplement', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:timing',
    'model:quantity'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});