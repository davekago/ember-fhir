import { moduleForModel, test } from 'ember-qunit';

moduleForModel('timing-repeat', 'Unit | Model | Timing_Repeat', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:duration',
    'model:range',
    'model:period'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});