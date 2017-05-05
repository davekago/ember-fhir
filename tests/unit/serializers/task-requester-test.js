import { moduleForModel, test } from 'ember-qunit';

moduleForModel('task-requester', 'Unit | Serializer | Task_Requester', {
  needs: [
    'serializer:task-requester',
    'model:reference',
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