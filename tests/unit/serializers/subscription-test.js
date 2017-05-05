import { moduleForModel, test } from 'ember-qunit';

moduleForModel('subscription', 'Unit | Serializer | Subscription', {
  needs: [
    'serializer:subscription',
    'model:contact-point',
    'model:subscription-channel',
    'model:coding',
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