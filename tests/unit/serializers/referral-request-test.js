import { moduleForModel, test } from 'ember-qunit';

moduleForModel('referral-request', 'Unit | Serializer | ReferralRequest', {
  needs: [
    'serializer:referral-request',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:period',
    'model:referral-request-requester',
    'model:annotation',
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