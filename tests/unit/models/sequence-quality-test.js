import { moduleForModel, test } from 'ember-qunit';

moduleForModel('sequence-quality', 'Unit | Model | Sequence_Quality', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:quantity'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});