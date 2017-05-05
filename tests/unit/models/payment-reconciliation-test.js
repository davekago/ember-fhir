import { moduleForModel, test } from 'ember-qunit';

moduleForModel('payment-reconciliation', 'Unit | Model | PaymentReconciliation', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:period',
    'model:reference',
    'model:codeable-concept',
    'model:payment-reconciliation-detail',
    'model:money',
    'model:payment-reconciliation-process-note'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});