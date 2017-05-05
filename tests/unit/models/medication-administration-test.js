import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication-administration', 'Unit | Model | MedicationAdministration', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:period',
    'model:medication-administration-performer',
    'model:annotation',
    'model:medication-administration-dosage'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});