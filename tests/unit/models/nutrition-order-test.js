import { moduleForModel, test } from 'ember-qunit';

moduleForModel('nutrition-order', 'Unit | Model | NutritionOrder', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:nutrition-order-oral-diet',
    'model:nutrition-order-supplement',
    'model:nutrition-order-enteral-formula'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});