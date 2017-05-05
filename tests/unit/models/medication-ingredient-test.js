import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication-ingredient', 'Unit | Model | Medication_Ingredient', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:reference',
    'model:ratio'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});