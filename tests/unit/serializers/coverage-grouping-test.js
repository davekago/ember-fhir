import { moduleForModel, test } from 'ember-qunit';

moduleForModel('coverage-grouping', 'Unit | Serializer | Coverage_Grouping', {
  needs: [
    'serializer:coverage-grouping',
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