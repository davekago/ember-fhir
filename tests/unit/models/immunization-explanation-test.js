import { moduleForModel, test } from 'ember-qunit';

moduleForModel('immunization-explanation', 'Unit | Model | Immunization_Explanation', {
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