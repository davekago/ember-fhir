import { moduleForModel, test } from 'ember-qunit';

moduleForModel('contract-agent', 'Unit | Serializer | Contract_Agent', {
  needs: [
    'serializer:contract-agent',
    'model:reference',
    'model:codeable-concept',
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