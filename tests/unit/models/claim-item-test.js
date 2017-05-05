import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-item', 'Unit | Model | Claim_Item', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:period',
    'model:address',
    'model:reference',
    'model:quantity',
    'model:money',
    'model:claim-detail'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});