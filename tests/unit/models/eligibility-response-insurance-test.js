import { moduleForModel, test } from 'ember-qunit';

moduleForModel('eligibility-response-insurance', 'Unit | Model | EligibilityResponse_Insurance', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference',
    'model:eligibility-response-benefit-balance'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});