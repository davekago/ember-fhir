import { moduleForModel, test } from 'ember-qunit';

moduleForModel('value-set-filter', 'Unit | Model | ValueSet_Filter', {
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