import { moduleForModel, test } from 'ember-qunit';

moduleForModel('contract-signer', 'Unit | Serializer | Contract_Signer', {
  needs: [
    'serializer:contract-signer',
    'model:coding',
    'model:reference',
    'model:signature',
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