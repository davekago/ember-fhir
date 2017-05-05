import { moduleForModel, test } from 'ember-qunit';

moduleForModel('timing', 'Unit | Serializer | Timing', {
  needs: [
    'serializer:timing',
    'model:timing-repeat',
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