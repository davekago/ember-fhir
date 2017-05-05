import { moduleForModel, test } from 'ember-qunit';

moduleForModel('payment-reconciliation-process-note', 'Unit | Serializer | PaymentReconciliation_ProcessNote', {
  needs: [
    'serializer:payment-reconciliation-process-note',
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