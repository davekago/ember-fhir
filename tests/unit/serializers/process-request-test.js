import { moduleForModel, test } from 'ember-qunit';

moduleForModel('process-request', 'Unit | Serializer | ProcessRequest', {
  needs: [
    'serializer:process-request',
    'model:identifier',
    'model:reference',
    'model:process-request-item',
    'model:period',
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