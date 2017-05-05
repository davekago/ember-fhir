import { moduleForModel, test } from 'ember-qunit';

moduleForModel('timing-repeat', 'Unit | Serializer | Timing_Repeat', {
  needs: [
    'serializer:timing-repeat',
    'model:duration',
    'model:range',
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