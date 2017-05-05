import { moduleForModel, test } from 'ember-qunit';

moduleForModel('observation', 'Unit | Model | Observation', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:period',
    'model:quantity',
    'model:range',
    'model:ratio',
    'model:sampled-data',
    'model:attachment',
    'model:observation-reference-range',
    'model:observation-related',
    'model:observation-component'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});