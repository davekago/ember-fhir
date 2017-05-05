import { moduleForModel, test } from 'ember-qunit';

moduleForModel('activity-definition-participant', 'Unit | Serializer | ActivityDefinition_Participant', {
  needs: [
    'serializer:activity-definition-participant',
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