import { moduleForModel, test } from 'ember-qunit';

moduleForModel('value-set-include', 'Unit | Model | ValueSet_Include', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:value-set-concept',
    'model:value-set-filter'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});