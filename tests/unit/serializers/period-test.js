import { moduleForModel, test } from 'ember-qunit';

moduleForModel('period', 'Unit | Serializer | Period', {
  needs: [
    'serializer:period',
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