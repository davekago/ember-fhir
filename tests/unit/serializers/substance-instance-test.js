import { moduleForModel, test } from 'ember-qunit';

moduleForModel('substance-instance', 'Unit | Serializer | Substance_Instance', {
  needs: [
    'serializer:substance-instance',
    'model:identifier',
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