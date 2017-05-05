import { moduleForModel, test } from 'ember-qunit';

moduleForModel('task', 'Unit | Serializer | Task', {
  needs: [
    'serializer:task',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:period',
    'model:task-requester',
    'model:annotation',
    'model:task-restriction',
    'model:task-input',
    'model:task-output',
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