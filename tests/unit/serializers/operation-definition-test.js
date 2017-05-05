import { moduleForModel, test } from 'ember-qunit';

moduleForModel('operation-definition', 'Unit | Serializer | OperationDefinition', {
  needs: [
    'serializer:operation-definition',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:reference',
    'model:operation-definition-parameter',
    'model:operation-definition-overload',
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