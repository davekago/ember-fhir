import { moduleForModel, test } from 'ember-qunit';

moduleForModel('plan-definition-target', 'Unit | Serializer | PlanDefinition_Target', {
  needs: [
    'serializer:plan-definition-target',
    'model:codeable-concept',
    'model:quantity',
    'model:range',
    'model:duration',
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