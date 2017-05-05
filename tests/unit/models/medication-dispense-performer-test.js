import { moduleForModel, test } from 'ember-qunit';

moduleForModel('medication-dispense-performer', 'Unit | Model | MedicationDispense_Performer', {
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