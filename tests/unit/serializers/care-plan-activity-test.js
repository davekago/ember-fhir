import { moduleForModel, test } from 'ember-qunit';

moduleForModel('care-plan-activity', 'Unit | Serializer | CarePlan_Activity', {
  needs: [
    'serializer:care-plan-activity',
    'model:codeable-concept',
    'model:reference',
    'model:annotation',
    'model:care-plan-detail',
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