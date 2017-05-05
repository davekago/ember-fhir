import { moduleForModel, test } from 'ember-qunit';

moduleForModel('payment-notice', 'Unit | Serializer | PaymentNotice', {
  needs: [
    'serializer:payment-notice',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
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