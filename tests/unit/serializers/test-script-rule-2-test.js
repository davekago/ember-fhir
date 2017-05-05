import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-rule-2', 'Unit | Serializer | TestScript_Rule2', {
  needs: [
    'serializer:test-script-rule-2',
    'model:test-script-param-2',
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