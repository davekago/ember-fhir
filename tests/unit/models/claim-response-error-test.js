import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-response-error', 'Unit | Model | ClaimResponse_Error', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});