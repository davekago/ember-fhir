import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-response-item', 'Unit | Model | ClaimResponse_Item', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:claim-response-adjudication',
    'model:claim-response-detail'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});