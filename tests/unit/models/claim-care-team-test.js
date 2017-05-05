import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-care-team', 'Unit | Model | Claim_CareTeam', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference',
    'model:codeable-concept'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});