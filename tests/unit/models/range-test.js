import { moduleForModel, test } from 'ember-qunit';

moduleForModel('range', 'Unit | Model | Range', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:quantity'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});