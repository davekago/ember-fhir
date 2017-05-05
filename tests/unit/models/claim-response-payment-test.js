import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-response-payment', 'Unit | Model | ClaimResponse_Payment', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:money',
    'model:identifier'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});