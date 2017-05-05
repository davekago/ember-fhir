import { moduleForModel, test } from 'ember-qunit';

moduleForModel('supply-delivery-supplied-item', 'Unit | Model | SupplyDelivery_SuppliedItem', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:quantity',
    'model:codeable-concept',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});