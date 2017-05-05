import { moduleForModel, test } from 'ember-qunit';

moduleForModel('nutrition-order-nutrient', 'Unit | Model | NutritionOrder_Nutrient', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:quantity'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});