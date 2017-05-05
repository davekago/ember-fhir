import { moduleForModel, test } from 'ember-qunit';

moduleForModel('charge-item', 'Unit | Model | ChargeItem', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:period',
    'model:timing',
    'model:charge-item-participant',
    'model:quantity',
    'model:money',
    'model:annotation'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});