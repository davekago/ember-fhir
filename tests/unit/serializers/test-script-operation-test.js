import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-operation', 'Unit | Serializer | TestScript_Operation', {
  needs: [
    'serializer:test-script-operation',
    'model:coding',
    'model:test-script-request-header',
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