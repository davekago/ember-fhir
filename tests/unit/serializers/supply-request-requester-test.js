import { moduleForModel, test } from 'ember-qunit';

moduleForModel('supply-request-requester', 'Unit | Serializer | SupplyRequest_Requester', {
  needs: [
    'serializer:supply-request-requester',
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