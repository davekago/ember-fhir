import { moduleForModel, test } from 'ember-qunit';

moduleForModel('risk-assessment-prediction', 'Unit | Serializer | RiskAssessment_Prediction', {
  needs: [
    'serializer:risk-assessment-prediction',
    'model:codeable-concept',
    'model:range',
    'model:period',
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