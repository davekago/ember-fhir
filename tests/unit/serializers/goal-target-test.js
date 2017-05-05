import { moduleForModel, test } from 'ember-qunit';

moduleForModel('goal-target', 'Unit | Serializer | Goal_Target', {
  needs: [
    'serializer:goal-target',
    'model:codeable-concept',
    'model:quantity',
    'model:range',
    'model:duration',
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