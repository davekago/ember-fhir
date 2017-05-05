import { moduleForModel, test } from 'ember-qunit';

moduleForModel('supply-request-ordered-item', 'Unit | Model | SupplyRequest_OrderedItem', {
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