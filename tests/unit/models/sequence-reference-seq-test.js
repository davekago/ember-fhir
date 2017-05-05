import { moduleForModel, test } from 'ember-qunit';

moduleForModel('sequence-reference-seq', 'Unit | Model | Sequence_ReferenceSeq', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});