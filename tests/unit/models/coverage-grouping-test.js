import { moduleForModel, test } from 'ember-qunit';

moduleForModel('coverage-grouping', 'Unit | Model | Coverage_Grouping', {
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