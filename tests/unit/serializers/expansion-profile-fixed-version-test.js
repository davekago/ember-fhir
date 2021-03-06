import { moduleForModel, test } from 'ember-qunit';

moduleForModel('expansion-profile-fixed-version', 'Unit | Serializer | ExpansionProfile_FixedVersion', {
  needs: [
    'serializer:expansion-profile-fixed-version',
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