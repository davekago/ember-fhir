import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-variable', 'Unit | Serializer | TestScript_Variable', {
  needs: [
    'serializer:test-script-variable',
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