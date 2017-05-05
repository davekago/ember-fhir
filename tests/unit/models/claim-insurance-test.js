import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-insurance', 'Unit | Model | Claim_Insurance', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});