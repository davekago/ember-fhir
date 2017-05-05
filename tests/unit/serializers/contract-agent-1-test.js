import { moduleForModel, test } from 'ember-qunit';

moduleForModel('contract-agent-1', 'Unit | Serializer | Contract_Agent1', {
  needs: [
    'serializer:contract-agent-1',
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