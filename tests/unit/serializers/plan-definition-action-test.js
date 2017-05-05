import { moduleForModel, test } from 'ember-qunit';

moduleForModel('plan-definition-action', 'Unit | Serializer | PlanDefinition_Action', {
  needs: [
    'serializer:plan-definition-action',
    'model:codeable-concept',
    'model:related-artifact',
    'model:trigger-definition',
    'model:plan-definition-condition',
    'model:data-requirement',
    'model:plan-definition-related-action',
    'model:period',
    'model:duration',
    'model:range',
    'model:timing',
    'model:plan-definition-participant',
    'model:coding',
    'model:reference',
    'model:plan-definition-dynamic-value',
    'model:plan-definition-action',
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