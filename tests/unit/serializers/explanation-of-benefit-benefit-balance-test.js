import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit-benefit-balance', 'Unit | Serializer | ExplanationOfBenefit_BenefitBalance', {
  needs: [
    'serializer:explanation-of-benefit-benefit-balance',
    'model:codeable-concept',
    'model:explanation-of-benefit-financial',
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