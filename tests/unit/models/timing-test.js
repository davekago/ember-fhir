import { moduleForModel, test } from 'ember-qunit';

moduleForModel('timing', 'Unit | Model | Timing', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:timing-repeat',
    'model:codeable-concept'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});