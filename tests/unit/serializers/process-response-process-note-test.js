import { moduleForModel, test } from 'ember-qunit';

moduleForModel('process-response-process-note', 'Unit | Serializer | ProcessResponse_ProcessNote', {
  needs: [
    'serializer:process-response-process-note',
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