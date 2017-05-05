import { moduleForModel, test } from 'ember-qunit';

moduleForModel('value-set-expansion', 'Unit | Serializer | ValueSet_Expansion', {
  needs: [
    'serializer:value-set-expansion',
    'model:value-set-parameter',
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