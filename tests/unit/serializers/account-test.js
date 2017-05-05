import { moduleForModel, test } from 'ember-qunit';

moduleForModel('account', 'Unit | Serializer | Account', {
  needs: [
    'serializer:account',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:period',
    'model:money',
    'model:account-coverage',
    'model:account-guarantor',
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