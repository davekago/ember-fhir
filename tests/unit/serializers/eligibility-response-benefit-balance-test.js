import { moduleForModel, test } from 'ember-qunit';

moduleForModel('eligibility-response-benefit-balance', 'Unit | Serializer | EligibilityResponse_BenefitBalance', {
  needs: [
    'serializer:eligibility-response-benefit-balance',
    'model:codeable-concept',
    'model:eligibility-response-financial',
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