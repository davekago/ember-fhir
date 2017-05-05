import { moduleForModel, test } from 'ember-qunit';

moduleForModel('composition-attester', 'Unit | Model | Composition_Attester', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});