import { moduleForModel, test } from 'ember-qunit';

moduleForModel('bundle', 'Unit | Serializer | Bundle', {
  needs: [
    'serializer:bundle',
    'model:identifier',
    'model:bundle-link',
    'model:bundle-entry',
    'model:signature',
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