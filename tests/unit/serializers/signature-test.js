import { moduleForModel, test } from 'ember-qunit';

moduleForModel('signature', 'Unit | Serializer | Signature', {
  needs: [
    'serializer:signature',
    'model:coding',
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