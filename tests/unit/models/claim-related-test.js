import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim-related', 'Unit | Model | Claim_Related', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference',
    'model:codeable-concept',
    'model:identifier'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});