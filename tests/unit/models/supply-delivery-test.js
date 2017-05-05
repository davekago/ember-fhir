import { moduleForModel, test } from 'ember-qunit';

moduleForModel('supply-delivery', 'Unit | Model | SupplyDelivery', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:supply-delivery-supplied-item',
    'model:period',
    'model:timing'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});