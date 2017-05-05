import { moduleForModel, test } from 'ember-qunit';

moduleForModel('message-definition-focus', 'Unit | Serializer | MessageDefinition_Focus', {
  needs: [
    'serializer:message-definition-focus',
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