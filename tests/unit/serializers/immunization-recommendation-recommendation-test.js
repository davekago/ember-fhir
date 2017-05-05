import { moduleForModel, test } from 'ember-qunit';

moduleForModel('immunization-recommendation-recommendation', 'Unit | Serializer | ImmunizationRecommendation_Recommendation', {
  needs: [
    'serializer:immunization-recommendation-recommendation',
    'model:codeable-concept',
    'model:immunization-recommendation-date-criterion',
    'model:immunization-recommendation-protocol',
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