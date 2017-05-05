import { moduleForModel, test } from 'ember-qunit';

moduleForModel('contract-valued-item', 'Unit | Serializer | Contract_ValuedItem', {
  needs: [
    'serializer:contract-valued-item',
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