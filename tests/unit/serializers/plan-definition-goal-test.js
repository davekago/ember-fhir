import { moduleForModel, test } from 'ember-qunit';

moduleForModel('plan-definition-goal', 'Unit | Serializer | PlanDefinition_Goal', {
  needs: [
    'serializer:plan-definition-goal',
    'model:codeable-concept',
    'model:related-artifact',
    'model:plan-definition-target',
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