import { moduleForModel, test } from 'ember-qunit';

moduleForModel('bundle-entry', 'Unit | Serializer | Bundle_Entry', {
  needs: [
    'serializer:bundle-entry',
    'model:bundle-link',
    'model:resource',
    'model:bundle-search',
    'model:bundle-request',
    'model:bundle-response',
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