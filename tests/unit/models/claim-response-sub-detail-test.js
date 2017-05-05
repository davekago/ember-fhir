import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-response-sub-detail', 'Unit | Model | ClaimResponse_SubDetail', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:claim-response-adjudication'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});