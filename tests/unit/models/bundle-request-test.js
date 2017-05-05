import { moduleForModel, test } from 'ember-qunit';

moduleForModel('bundle-request', 'Unit | Model | Bundle_Request', {
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