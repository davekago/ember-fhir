import { moduleForModel, test } from 'ember-qunit';

moduleForModel('value-set-contains', 'Unit | Serializer | ValueSet_Contains', {
  needs: [
    'serializer:value-set-contains',
    'model:value-set-designation',
    'model:value-set-contains',
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:value-set-contain'
  ]
});

test('it serializes records', function(assert) {
  const record = this.subject(),
    serializeRecord = record.serialize();

  assert.ok(serializeRecord);
});