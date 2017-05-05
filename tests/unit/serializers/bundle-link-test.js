import { moduleForModel, test } from 'ember-qunit';

moduleForModel('bundle-link', 'Unit | Serializer | Bundle_Link', {
  needs: [
    'serializer:bundle-link',
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