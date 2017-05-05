import { moduleForModel, test } from 'ember-qunit';

moduleForModel('group-member', 'Unit | Serializer | Group_Member', {
  needs: [
    'serializer:group-member',
    'model:reference',
    'model:period',
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