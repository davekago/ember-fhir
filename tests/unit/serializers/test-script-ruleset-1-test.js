import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-ruleset-1', 'Unit | Serializer | TestScript_Ruleset1', {
  needs: [
    'serializer:test-script-ruleset-1',
    'model:test-script-rule-3',
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