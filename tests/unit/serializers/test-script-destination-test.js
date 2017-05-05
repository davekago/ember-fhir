import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-destination', 'Unit | Serializer | TestScript_Destination', {
  needs: [
    'serializer:test-script-destination',
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