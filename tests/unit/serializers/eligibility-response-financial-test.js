import { moduleForModel, test } from 'ember-qunit';

moduleForModel('eligibility-response-financial', 'Unit | Serializer | EligibilityResponse_Financial', {
  needs: [
    'serializer:eligibility-response-financial',
    'model:codeable-concept',
    'model:money',
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