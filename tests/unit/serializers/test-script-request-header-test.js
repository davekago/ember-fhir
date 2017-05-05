import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-request-header', 'Unit | Serializer | TestScript_RequestHeader', {
  needs: [
    'serializer:test-script-request-header',
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