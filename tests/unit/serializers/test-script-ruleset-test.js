import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-ruleset', 'Unit | Serializer | TestScript_Ruleset', {
  needs: [
    'serializer:test-script-ruleset',
    'model:reference',
    'model:test-script-rule-1',
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