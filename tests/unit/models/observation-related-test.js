import { moduleForModel, test } from 'ember-qunit';

moduleForModel('observation-related', 'Unit | Model | Observation_Related', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});