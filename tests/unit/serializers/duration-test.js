import { moduleForModel, test } from 'ember-qunit';

moduleForModel('duration', 'Unit | Serializer | Duration', {
  needs: [
    'serializer:duration',
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