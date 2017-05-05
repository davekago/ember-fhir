import { moduleForModel, test } from 'ember-qunit';

moduleForModel('value-set-compose', 'Unit | Model | ValueSet_Compose', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:value-set-include'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});