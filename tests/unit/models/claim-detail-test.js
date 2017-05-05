import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-detail', 'Unit | Model | Claim_Detail', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:quantity',
    'model:money',
    'model:reference',
    'model:claim-sub-detail'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});