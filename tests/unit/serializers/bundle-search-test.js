import { moduleForModel, test } from 'ember-qunit';

moduleForModel('bundle-search', 'Unit | Serializer | Bundle_Search', {
  needs: [
    'serializer:bundle-search',
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