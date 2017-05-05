import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-response-add-item', 'Unit | Model | ClaimResponse_AddItem', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:money',
    'model:claim-response-adjudication',
    'model:claim-response-detail-1'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});