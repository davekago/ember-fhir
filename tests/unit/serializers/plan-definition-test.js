import { moduleForModel, test } from 'ember-qunit';

moduleForModel('plan-definition', 'Unit | Serializer | PlanDefinition', {
  needs: [
    'serializer:plan-definition',
    'model:identifier',
    'model:codeable-concept',
    'model:period',
    'model:usage-context',
    'model:contributor',
    'model:contact-detail',
    'model:related-artifact',
    'model:reference',
    'model:plan-definition-goal',
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