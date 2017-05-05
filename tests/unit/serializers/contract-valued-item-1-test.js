import { moduleForModel, test } from 'ember-qunit';

moduleForModel('contract-valued-item-1', 'Unit | Serializer | Contract_ValuedItem1', {
  needs: [
    'serializer:contract-valued-item-1',
    'model:codeable-concept',
    'model:reference',
    'model:identifier',
    'model:quantity',
    'model:money',
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