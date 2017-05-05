import { moduleForModel, test } from 'ember-qunit';

moduleForModel('eligibility-response', 'Unit | Serializer | EligibilityResponse', {
  needs: [
    'serializer:eligibility-response',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:eligibility-response-insurance',
    'model:eligibility-response-error',
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