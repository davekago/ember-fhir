import { moduleForModel, test } from 'ember-qunit';

moduleForModel('range', 'Unit | Serializer | Range', {
  needs: [
    'serializer:range',
    'model:quantity',
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