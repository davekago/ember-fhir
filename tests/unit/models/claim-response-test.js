import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-response', 'Unit | Model | ClaimResponse', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:claim-response-item',
    'model:claim-response-add-item',
    'model:claim-response-error',
    'model:money',
    'model:claim-response-payment',
    'model:coding',
    'model:claim-response-process-note',
    'model:claim-response-insurance'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});