import { moduleForModel, test } from 'ember-qunit';

moduleForModel('usage-context', 'Unit | Serializer | UsageContext', {
  needs: [
    'serializer:usage-context',
    'model:coding',
    'model:codeable-concept',
    'model:quantity',
    'model:range',
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