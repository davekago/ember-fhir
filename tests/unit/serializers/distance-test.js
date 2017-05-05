import { moduleForModel, test } from 'ember-qunit';

moduleForModel('distance', 'Unit | Serializer | Distance', {
  needs: [
    'serializer:distance',
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