import { moduleForModel, test } from 'ember-qunit';

moduleForModel('bundle', 'Unit | Model | Bundle', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:bundle-link',
    'model:bundle-entry',
    'model:signature'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});