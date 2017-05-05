import { moduleForModel, test } from 'ember-qunit';

moduleForModel('operation-outcome', 'Unit | Serializer | OperationOutcome', {
  needs: [
    'serializer:operation-outcome',
    'model:operation-outcome-issue',
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