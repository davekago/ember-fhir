import { moduleForModel, test } from 'ember-qunit';

moduleForModel('care-plan', 'Unit | Serializer | CarePlan', {
  needs: [
    'serializer:care-plan',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:period',
    'model:care-plan-activity',
    'model:annotation',
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