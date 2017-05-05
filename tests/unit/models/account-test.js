import { moduleForModel, test } from 'ember-qunit';

moduleForModel('account', 'Unit | Model | Account', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:period',
    'model:money',
    'model:account-coverage',
    'model:account-guarantor'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});