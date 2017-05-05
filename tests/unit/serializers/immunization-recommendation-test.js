import { moduleForModel, test } from 'ember-qunit';

moduleForModel('immunization-recommendation', 'Unit | Serializer | ImmunizationRecommendation', {
  needs: [
    'serializer:immunization-recommendation',
    'model:identifier',
    'model:reference',
    'model:immunization-recommendation-recommendation',
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