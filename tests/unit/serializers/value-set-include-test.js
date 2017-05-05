import { moduleForModel, test } from 'ember-qunit';

moduleForModel('value-set-include', 'Unit | Serializer | ValueSet_Include', {
  needs: [
    'serializer:value-set-include',
    'model:value-set-concept',
    'model:value-set-filter',
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