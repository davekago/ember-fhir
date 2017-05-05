import { moduleForModel, test } from 'ember-qunit';

moduleForModel('patient-contact', 'Unit | Model | Patient_Contact', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:human-name',
    'model:contact-point',
    'model:address',
    'model:reference',
    'model:period'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});