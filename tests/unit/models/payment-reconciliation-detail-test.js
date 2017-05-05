import { moduleForModel, test } from 'ember-qunit';

moduleForModel('payment-reconciliation-detail', 'Unit | Model | PaymentReconciliation_Detail', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:reference',
    'model:money'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});