import { moduleForModel, test } from 'ember-qunit';

moduleForModel('nutrition-order-enteral-formula', 'Unit | Model | NutritionOrder_EnteralFormula', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:quantity',
    'model:nutrition-order-administration'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});