import { moduleForModel, test } from 'ember-qunit';

moduleForModel('ratio', 'Unit | Serializer | Ratio', {
  needs: [
    'serializer:ratio',
    'model:quantity',
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