import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-setup', 'Unit | Serializer | TestScript_Setup', {
  needs: [
    'serializer:test-script-setup',
    'model:test-script-action',
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