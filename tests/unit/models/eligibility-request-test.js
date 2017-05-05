import { moduleForModel, test } from 'ember-qunit';

moduleForModel('eligibility-request', 'Unit | Model | EligibilityRequest', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:period'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});