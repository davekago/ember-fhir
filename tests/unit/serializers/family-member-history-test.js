import { moduleForModel, test } from 'ember-qunit';

moduleForModel('family-member-history', 'Unit | Serializer | FamilyMemberHistory', {
  needs: [
    'serializer:family-member-history',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:period',
    'model:age',
    'model:range',
    'model:annotation',
    'model:family-member-history-condition',
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