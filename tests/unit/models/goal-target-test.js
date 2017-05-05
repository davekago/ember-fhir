import { moduleForModel, test } from 'ember-qunit';

moduleForModel('goal-target', 'Unit | Model | Goal_Target', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:quantity',
    'model:range',
    'model:duration'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});