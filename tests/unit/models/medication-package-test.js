import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication-package', 'Unit | Model | Medication_Package', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:medication-content',
    'model:medication-batch'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});