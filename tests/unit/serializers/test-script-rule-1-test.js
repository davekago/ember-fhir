import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-rule-1', 'Unit | Serializer | TestScript_Rule1', {
  needs: [
    'serializer:test-script-rule-1',
    'model:test-script-param-1',
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