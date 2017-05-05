import { moduleForModel, test } from 'ember-qunit';

moduleForModel('element-definition-constraint', 'Unit | Serializer | ElementDefinition_Constraint', {
  needs: [
    'serializer:element-definition-constraint',
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