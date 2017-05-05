import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication-dispense-substitution', 'Unit | Model | MedicationDispense_Substitution', {
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