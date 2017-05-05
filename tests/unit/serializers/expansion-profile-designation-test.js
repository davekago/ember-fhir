import { moduleForModel, test } from 'ember-qunit';

moduleForModel('expansion-profile-designation', 'Unit | Serializer | ExpansionProfile_Designation', {
  needs: [
    'serializer:expansion-profile-designation',
    'model:expansion-profile-include',
    'model:expansion-profile-exclude',
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