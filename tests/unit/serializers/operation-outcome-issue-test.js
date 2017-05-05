import { moduleForModel, test } from 'ember-qunit';

moduleForModel('operation-outcome-issue', 'Unit | Serializer | OperationOutcome_Issue', {
  needs: [
    'serializer:operation-outcome-issue',
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