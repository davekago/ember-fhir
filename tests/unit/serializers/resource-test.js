import { moduleForModel, test } from 'ember-qunit';

moduleForModel('resource', 'Unit | Serializer | Resource', {
  needs: [
    'serializer:resource',
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