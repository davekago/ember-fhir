import { moduleForModel, test } from 'ember-qunit';

moduleForModel('vision-prescription', 'Unit | Model | VisionPrescription', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:vision-prescription-dispense'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});