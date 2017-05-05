import { moduleForModel, test } from 'ember-qunit';

moduleForModel('immunization-vaccination-protocol', 'Unit | Model | Immunization_VaccinationProtocol', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference',
    'model:codeable-concept'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});