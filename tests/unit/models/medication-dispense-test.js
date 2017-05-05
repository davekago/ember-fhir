import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication-dispense', 'Unit | Model | MedicationDispense', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:medication-dispense-performer',
    'model:quantity',
    'model:annotation',
    'model:dosage',
    'model:medication-dispense-substitution'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});