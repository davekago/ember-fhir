import { moduleForModel, test } from 'ember-qunit';

moduleForModel('bundle-search', 'Unit | Model | Bundle_Search', {
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