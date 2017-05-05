import { moduleForModel, test } from 'ember-qunit';

moduleForModel('care-team-participant', 'Unit | Serializer | CareTeam_Participant', {
  needs: [
    'serializer:care-team-participant',
    'model:codeable-concept',
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