import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-param-1', 'Unit | Serializer | TestScript_Param1', {
  needs: [
    'serializer:test-script-param-1',
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