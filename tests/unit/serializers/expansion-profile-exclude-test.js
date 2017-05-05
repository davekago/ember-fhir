import { moduleForModel, test } from 'ember-qunit';

moduleForModel('expansion-profile-exclude', 'Unit | Serializer | ExpansionProfile_Exclude', {
  needs: [
    'serializer:expansion-profile-exclude',
    'model:expansion-profile-designation-2',
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