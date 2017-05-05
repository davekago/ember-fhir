import { moduleForModel, test } from 'ember-qunit';

moduleForModel('expansion-profile-designation-1', 'Unit | Serializer | ExpansionProfile_Designation1', {
  needs: [
    'serializer:expansion-profile-designation-1',
    'model:coding',
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