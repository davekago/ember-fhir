import { moduleForModel, test } from 'ember-qunit';

moduleForModel('reference', 'Unit | Model | Reference', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});