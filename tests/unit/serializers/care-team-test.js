import { moduleForModel, test } from 'ember-qunit';

moduleForModel('care-team', 'Unit | Serializer | CareTeam', {
  needs: [
    'serializer:care-team',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:period',
    'model:care-team-participant',
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