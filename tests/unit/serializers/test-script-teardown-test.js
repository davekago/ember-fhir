import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-teardown', 'Unit | Serializer | TestScript_Teardown', {
  needs: [
    'serializer:test-script-teardown',
    'model:test-script-action-2',
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