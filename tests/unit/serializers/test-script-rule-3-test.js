import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-rule-3', 'Unit | Serializer | TestScript_Rule3', {
  needs: [
    'serializer:test-script-rule-3',
    'model:test-script-param-3',
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