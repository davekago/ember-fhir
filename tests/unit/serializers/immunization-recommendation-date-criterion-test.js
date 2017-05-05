import { moduleForModel, test } from 'ember-qunit';

moduleForModel('immunization-recommendation-date-criterion', 'Unit | Serializer | ImmunizationRecommendation_DateCriterion', {
  needs: [
    'serializer:immunization-recommendation-date-criterion',
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