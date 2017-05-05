import { moduleForModel, test } from 'ember-qunit';

moduleForModel('duration', 'Unit | Model | Duration', {
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