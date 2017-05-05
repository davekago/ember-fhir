import { moduleForModel, test } from 'ember-qunit';

moduleForModel('procedure-request-requester', 'Unit | Serializer | ProcedureRequest_Requester', {
  needs: [
    'serializer:procedure-request-requester',
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