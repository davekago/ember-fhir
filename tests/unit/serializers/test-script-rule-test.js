import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script-rule', 'Unit | Serializer | TestScript_Rule', {
  needs: [
    'serializer:test-script-rule',
    'model:reference',
    'model:test-script-param',
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