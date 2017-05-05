import { moduleForModel, test } from 'ember-qunit';

moduleForModel('element', 'Unit | Serializer | Element', {
  needs: [
    'serializer:element',
    'model:extension',
    'model:meta',
    'model:narrative',
    'model:resource'
  ]
});

test('it serializes records', function(assert) {
  const record = this.subject(),
    serializeRecord = record.serialize();

  assert.ok(serializeRecord);
});