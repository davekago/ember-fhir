import { moduleForModel, test } from 'ember-qunit';

moduleForModel('graph-definition', 'Unit | Serializer | GraphDefinition', {
  needs: [
    'serializer:graph-definition',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:graph-definition-link',
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