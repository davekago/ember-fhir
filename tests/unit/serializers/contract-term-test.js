import { moduleForModel, test } from 'ember-qunit';

moduleForModel('contract-term', 'Unit | Serializer | Contract_Term', {
  needs: [
    'serializer:contract-term',
    'model:identifier',
    'model:period',
    'model:codeable-concept',
    'model:reference',
    'model:coding',
    'model:contract-agent-1',
    'model:contract-valued-item-1',
    'model:contract-term',
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