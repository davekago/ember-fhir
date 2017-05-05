import { moduleForModel, test } from 'ember-qunit';

moduleForModel('graph-definition-target', 'Unit | Serializer | GraphDefinition_Target', {
  needs: [
    'serializer:graph-definition-target',
    'model:graph-definition-compartment',
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