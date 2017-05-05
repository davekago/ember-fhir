import { moduleForModel, test } from 'ember-qunit';

moduleForModel('family-member-history-condition', 'Unit | Serializer | FamilyMemberHistory_Condition', {
  needs: [
    'serializer:family-member-history-condition',
    'model:codeable-concept',
    'model:age',
    'model:range',
    'model:period',
    'model:annotation',
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