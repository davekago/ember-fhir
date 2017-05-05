import { moduleForModel, test } from 'ember-qunit';

moduleForModel('payment-reconciliation-detail', 'Unit | Serializer | PaymentReconciliation_Detail', {
  needs: [
    'serializer:payment-reconciliation-detail',
    'model:codeable-concept',
    'model:reference',
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