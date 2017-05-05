import { moduleForModel, test } from 'ember-qunit';

moduleForModel('payment-reconciliation-process-note', 'Unit | Model | PaymentReconciliation_ProcessNote', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});