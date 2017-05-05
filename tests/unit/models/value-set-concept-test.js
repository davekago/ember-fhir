import { moduleForModel, test } from 'ember-qunit';

moduleForModel('value-set-concept', 'Unit | Model | ValueSet_Concept', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:value-set-designation'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});