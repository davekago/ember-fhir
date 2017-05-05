import { moduleForModel, test } from 'ember-qunit';

moduleForModel('bundle-response', 'Unit | Model | Bundle_Response', {
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