import { moduleForModel, test } from 'ember-qunit';

moduleForModel('request-group-condition', 'Unit | Serializer | RequestGroup_Condition', {
  needs: [
    'serializer:request-group-condition',
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