import { moduleForModel, test } from 'ember-qunit';

moduleForModel('eligibility-response', 'Unit | Model | EligibilityResponse', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:eligibility-response-insurance',
    'model:eligibility-response-error'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});