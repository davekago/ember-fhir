import { moduleForModel, test } from 'ember-qunit';

moduleForModel('sequence-repository', 'Unit | Model | Sequence_Repository', {
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