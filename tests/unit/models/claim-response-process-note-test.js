import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-response-process-note', 'Unit | Model | ClaimResponse_ProcessNote', {
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