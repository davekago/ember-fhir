import { moduleForModel, test } from 'ember-qunit';

moduleForModel('value-set-filter', 'Unit | Serializer | ValueSet_Filter', {
  needs: [
    'serializer:value-set-filter',
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