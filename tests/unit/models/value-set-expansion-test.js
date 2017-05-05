import { moduleForModel, test } from 'ember-qunit';

moduleForModel('value-set-expansion', 'Unit | Model | ValueSet_Expansion', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:value-set-parameter',
    'model:value-set-contains',
    'model:value-set-contain'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});