import { moduleForModel, test } from 'ember-qunit';

moduleForModel('process-response', 'Unit | Serializer | ProcessResponse', {
  needs: [
    'serializer:process-response',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:process-response-process-note',
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