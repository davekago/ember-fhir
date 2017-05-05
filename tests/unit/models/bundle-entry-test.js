import { moduleForModel, test } from 'ember-qunit';

moduleForModel('bundle-entry', 'Unit | Model | Bundle_Entry', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:bundle-link',
    'model:bundle-search',
    'model:bundle-request',
    'model:bundle-response'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});