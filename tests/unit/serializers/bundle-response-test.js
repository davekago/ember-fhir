import { moduleForModel, test } from 'ember-qunit';

moduleForModel('bundle-response', 'Unit | Serializer | Bundle_Response', {
  needs: [
    'serializer:bundle-response',
    'model:resource',
    'model:meta',
    'model:narrative',
    'model:extension'
  ]
});

test('it serializes records', function(assert) {
  const record = this.subject(),
    serializeRecord = record.serialize();

  assert.ok(serializeRecord);
});