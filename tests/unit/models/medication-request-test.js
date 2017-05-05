import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication-request', 'Unit | Model | MedicationRequest', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:medication-request-requester',
    'model:annotation',
    'model:dosage',
    'model:medication-request-dispense-request',
    'model:medication-request-substitution'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});