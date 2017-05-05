import { moduleForModel, test } from 'ember-qunit';

moduleForModel('group-characteristic', 'Unit | Serializer | Group_Characteristic', {
  needs: [
    'serializer:group-characteristic',
    'model:codeable-concept',
    'model:quantity',
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