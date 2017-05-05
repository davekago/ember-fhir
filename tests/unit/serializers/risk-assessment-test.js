import { moduleForModel, test } from 'ember-qunit';

moduleForModel('risk-assessment', 'Unit | Serializer | RiskAssessment', {
  needs: [
    'serializer:risk-assessment',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:period',
    'model:risk-assessment-prediction',
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