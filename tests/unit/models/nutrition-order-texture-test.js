import { moduleForModel, test } from 'ember-qunit';

moduleForModel('nutrition-order-texture', 'Unit | Model | NutritionOrder_Texture', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});