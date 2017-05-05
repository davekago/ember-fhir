import { moduleForModel, test } from 'ember-qunit';

moduleForModel('patient', 'Unit | Model | Patient', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:human-name',
    'model:contact-point',
    'model:address',
    'model:codeable-concept',
    'model:attachment',
    'model:patient-contact',
    'model:patient-animal',
    'model:patient-communication',
    'model:reference',
    'model:patient-link'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});