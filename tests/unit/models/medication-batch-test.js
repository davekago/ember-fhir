import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication-batch', 'Unit | Model | Medication_Batch', {
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