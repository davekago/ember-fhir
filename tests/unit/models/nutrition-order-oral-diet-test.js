import { moduleForModel, test } from 'ember-qunit';

moduleForModel('nutrition-order-oral-diet', 'Unit | Model | NutritionOrder_OralDiet', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:timing',
    'model:nutrition-order-nutrient',
    'model:nutrition-order-texture'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});