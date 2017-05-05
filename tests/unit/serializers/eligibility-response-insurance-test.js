import { moduleForModel, test } from 'ember-qunit';

moduleForModel('eligibility-response-insurance', 'Unit | Serializer | EligibilityResponse_Insurance', {
  needs: [
    'serializer:eligibility-response-insurance',
    'model:reference',
    'model:eligibility-response-benefit-balance',
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