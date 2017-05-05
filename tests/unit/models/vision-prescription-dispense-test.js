import { moduleForModel, test } from 'ember-qunit';

moduleForModel('vision-prescription-dispense', 'Unit | Model | VisionPrescription_Dispense', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:quantity',
    'model:annotation'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});