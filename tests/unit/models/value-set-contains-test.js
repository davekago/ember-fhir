import { moduleForModel, test } from 'ember-qunit';

moduleForModel('value-set-contains', 'Unit | Model | ValueSet_Contains', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:value-set-designation',
    'model:value-set-contains',
    'model:value-set-contain'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});