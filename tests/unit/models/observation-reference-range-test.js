import { moduleForModel, test } from 'ember-qunit';

moduleForModel('observation-reference-range', 'Unit | Model | Observation_ReferenceRange', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:quantity',
    'model:codeable-concept',
    'model:range'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});