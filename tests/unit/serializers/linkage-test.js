import { moduleForModel, test } from 'ember-qunit';

moduleForModel('linkage', 'Unit | Serializer | Linkage', {
  needs: [
    'serializer:linkage',
    'model:reference',
    'model:linkage-item',
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