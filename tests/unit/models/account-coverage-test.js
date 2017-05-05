import { moduleForModel, test } from 'ember-qunit';

moduleForModel('account-coverage', 'Unit | Model | Account_Coverage', {
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