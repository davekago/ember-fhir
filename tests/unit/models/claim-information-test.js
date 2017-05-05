import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-information', 'Unit | Model | Claim_Information', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:period',
    'model:quantity',
    'model:attachment',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});