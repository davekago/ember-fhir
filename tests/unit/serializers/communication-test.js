import { moduleForModel, test } from 'ember-qunit';

moduleForModel('communication', 'Unit | Serializer | Communication', {
  needs: [
    'serializer:communication',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:communication-payload',
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