import { moduleForModel, test } from 'ember-qunit';

moduleForModel('ratio', 'Unit | Model | Ratio', {
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