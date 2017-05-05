import { moduleForModel, test } from 'ember-qunit';

moduleForModel('message-definition', 'Unit | Serializer | MessageDefinition', {
  needs: [
    'serializer:message-definition',
    'model:identifier',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:reference',
    'model:coding',
    'model:message-definition-focus',
    'model:message-definition-allowed-response',
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:message-definition-focu'
  ]
});

test('it serializes records', function(assert) {
  const record = this.subject(),
    serializeRecord = record.serialize();

  assert.ok(serializeRecord);
});