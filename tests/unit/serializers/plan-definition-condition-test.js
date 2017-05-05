import { moduleForModel, test } from 'ember-qunit';

moduleForModel('plan-definition-condition', 'Unit | Serializer | PlanDefinition_Condition', {
  needs: [
    'serializer:plan-definition-condition',
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