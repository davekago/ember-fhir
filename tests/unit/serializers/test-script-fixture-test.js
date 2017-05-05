import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-fixture', 'Unit | Serializer | TestScript_Fixture', {
  needs: [
    'serializer:test-script-fixture',
    'model:reference',
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