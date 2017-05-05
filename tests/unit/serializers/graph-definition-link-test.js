import { moduleForModel, test } from 'ember-qunit';

moduleForModel('graph-definition-link', 'Unit | Serializer | GraphDefinition_Link', {
  needs: [
    'serializer:graph-definition-link',
    'model:graph-definition-target',
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