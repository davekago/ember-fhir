import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-response-detail', 'Unit | Model | ClaimResponse_Detail', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:claim-response-adjudication',
    'model:claim-response-sub-detail'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});