import { moduleForModel, test } from 'ember-qunit';

moduleForModel('account-coverage', 'Unit | Serializer | Account_Coverage', {
  needs: [
    'serializer:account-coverage',
    'model:reference',
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension'
  ]
});

test('it serializes records', function(assert) {
  const record = this.subject(),
    serializeRecord = record.serialize();

  assert.ok(serializeRecord);
});