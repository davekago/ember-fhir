import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-test', 'Unit | Serializer | TestScript_Test', {
  needs: [
    'serializer:test-script-test',
    'model:test-script-action-1',
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