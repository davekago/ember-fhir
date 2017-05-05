import { moduleForModel, test } from 'ember-qunit';

moduleForModel('quantity', 'Unit | Model | Quantity', {
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