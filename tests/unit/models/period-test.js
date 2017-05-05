import { moduleForModel, test } from 'ember-qunit';

moduleForModel('period', 'Unit | Model | Period', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});