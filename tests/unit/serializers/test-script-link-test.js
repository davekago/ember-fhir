import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-link', 'Unit | Serializer | TestScript_Link', {
  needs: [
    'serializer:test-script-link',
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