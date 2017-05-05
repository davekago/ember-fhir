import { moduleForModel, test } from 'ember-qunit';

moduleForModel('account-guarantor', 'Unit | Model | Account_Guarantor', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference',
    'model:period'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});