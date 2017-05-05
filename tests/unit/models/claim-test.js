import { moduleForModel, test } from 'ember-qunit';

moduleForModel('claim', 'Unit | Model | Claim', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:period',
    'model:claim-related',
    'model:claim-payee',
    'model:claim-care-team',
    'model:claim-information',
    'model:claim-diagnosis',
    'model:claim-procedure',
    'model:claim-insurance',
    'model:claim-accident',
    'model:claim-item',
    'model:money'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});