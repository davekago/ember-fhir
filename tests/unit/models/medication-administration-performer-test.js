import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication-administration-performer', 'Unit | Model | MedicationAdministration_Performer', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});