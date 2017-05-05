import { moduleForModel, test } from 'ember-qunit';

moduleForModel('binary', 'Unit | Serializer | Binary', {
  needs: [
    'serializer:binary',
    'model:reference',
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