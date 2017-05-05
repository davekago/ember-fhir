import { moduleForModel, test } from 'ember-qunit';

moduleForModel('task-restriction', 'Unit | Serializer | Task_Restriction', {
  needs: [
    'serializer:task-restriction',
    'model:period',
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