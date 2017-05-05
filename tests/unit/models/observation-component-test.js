import { moduleForModel, test } from 'ember-qunit';

moduleForModel('observation-component', 'Unit | Model | Observation_Component', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:quantity',
    'model:range',
    'model:ratio',
    'model:sampled-data',
    'model:attachment',
    'model:period',
    'model:observation-reference-range'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});