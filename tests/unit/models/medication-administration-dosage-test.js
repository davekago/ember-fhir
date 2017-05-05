import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication-administration-dosage', 'Unit | Model | MedicationAdministration_Dosage', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:quantity',
    'model:ratio'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});