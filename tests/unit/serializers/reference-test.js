import { moduleForModel, test } from 'ember-qunit';

moduleForModel('reference', 'Unit | Serializer | Reference', {
  needs: [
    'serializer:reference',
    'model:identifier',
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