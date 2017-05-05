import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication-statement', 'Unit | Model | MedicationStatement', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:period',
    'model:annotation',
    'model:dosage'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});