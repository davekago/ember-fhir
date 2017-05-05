import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-assert', 'Unit | Serializer | TestScript_Assert', {
  needs: [
    'serializer:test-script-assert',
    'model:test-script-rule-2',
    'model:test-script-ruleset-1',
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