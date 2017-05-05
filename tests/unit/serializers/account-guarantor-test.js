import { moduleForModel, test } from 'ember-qunit';

moduleForModel('account-guarantor', 'Unit | Serializer | Account_Guarantor', {
  needs: [
    'serializer:account-guarantor',
    'model:reference',
    'model:period',
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