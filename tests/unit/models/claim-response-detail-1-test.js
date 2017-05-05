import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-response-detail-1', 'Unit | Model | ClaimResponse_Detail1', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:money',
    'model:claim-response-adjudication'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});