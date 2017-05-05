import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication-request-substitution', 'Unit | Model | MedicationRequest_Substitution', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});