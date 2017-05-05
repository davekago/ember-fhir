import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit-diagnosis', 'Unit | Serializer | ExplanationOfBenefit_Diagnosis', {
  needs: [
    'serializer:explanation-of-benefit-diagnosis',
    'model:codeable-concept',
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