import { moduleForModel, test } from 'ember-qunit';

moduleForModel('immunization-vaccination-protocol', 'Unit | Serializer | Immunization_VaccinationProtocol', {
  needs: [
    'serializer:immunization-vaccination-protocol',
    'model:reference',
    'model:codeable-concept',
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension'
  ]
});

test('it serializes records', function(assert) {
  const record = this.subject(),
    serializeRecord = record.serialize();

  assert.ok(serializeRecord);
});