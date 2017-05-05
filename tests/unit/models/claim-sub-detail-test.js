import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-sub-detail', 'Unit | Model | Claim_SubDetail', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:quantity',
    'model:money',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});