import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication-request-dispense-request', 'Unit | Model | MedicationRequest_DispenseRequest', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:period',
    'model:quantity',
    'model:duration',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});