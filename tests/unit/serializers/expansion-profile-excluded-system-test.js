import { moduleForModel, test } from 'ember-qunit';

moduleForModel('expansion-profile-excluded-system', 'Unit | Serializer | ExpansionProfile_ExcludedSystem', {
  needs: [
    'serializer:expansion-profile-excluded-system',
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