import { moduleForModel, test } from 'ember-qunit';

moduleForModel('contract-signer', 'Unit | Model | Contract_Signer', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:coding',
    'model:reference',
    'model:signature'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});