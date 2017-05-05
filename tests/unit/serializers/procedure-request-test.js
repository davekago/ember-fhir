import { moduleForModel, test } from 'ember-qunit';

moduleForModel('procedure-request', 'Unit | Serializer | ProcedureRequest', {
  needs: [
    'serializer:procedure-request',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:period',
    'model:timing',
    'model:procedure-request-requester',
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