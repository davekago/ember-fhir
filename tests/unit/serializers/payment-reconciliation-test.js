import { moduleForModel, test } from 'ember-qunit';

moduleForModel('payment-reconciliation', 'Unit | Serializer | PaymentReconciliation', {
  needs: [
    'serializer:payment-reconciliation',
    'model:identifier',
    'model:period',
    'model:reference',
    'model:codeable-concept',
    'model:payment-reconciliation-detail',
    'model:money',
    'model:payment-reconciliation-process-note',
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