import { moduleForModel, test } from 'ember-qunit';

moduleForModel('graph-definition-compartment', 'Unit | Serializer | GraphDefinition_Compartment', {
  needs: [
    'serializer:graph-definition-compartment',
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