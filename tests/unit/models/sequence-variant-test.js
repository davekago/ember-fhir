import { moduleForModel, test } from 'ember-qunit';

moduleForModel('sequence-variant', 'Unit | Model | Sequence_Variant', {
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