import { moduleForModel, test } from 'ember-qunit';

moduleForModel('substance-ingredient', 'Unit | Model | Substance_Ingredient', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:ratio',
    'model:codeable-concept',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});