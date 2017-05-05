import { moduleForModel, test } from 'ember-qunit';

moduleForModel('plan-definition-participant', 'Unit | Serializer | PlanDefinition_Participant', {
  needs: [
    'serializer:plan-definition-participant',
    'model:codeable-concept',
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