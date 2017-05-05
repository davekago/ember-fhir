import { moduleForModel, test } from 'ember-qunit';

moduleForModel('linkage-item', 'Unit | Serializer | Linkage_Item', {
  needs: [
    'serializer:linkage-item',
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