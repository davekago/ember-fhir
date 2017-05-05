import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-origin', 'Unit | Serializer | TestScript_Origin', {
  needs: [
    'serializer:test-script-origin',
    'model:coding',
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