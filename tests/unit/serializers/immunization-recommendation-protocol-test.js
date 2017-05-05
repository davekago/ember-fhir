import { moduleForModel, test } from 'ember-qunit';

moduleForModel('immunization-recommendation-protocol', 'Unit | Serializer | ImmunizationRecommendation_Protocol', {
  needs: [
    'serializer:immunization-recommendation-protocol',
    'model:reference',
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