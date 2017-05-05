import { moduleForModel, test } from 'ember-qunit';

moduleForModel('immunization-practitioner', 'Unit | Model | Immunization_Practitioner', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});