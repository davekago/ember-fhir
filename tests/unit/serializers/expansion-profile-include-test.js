import { moduleForModel, test } from 'ember-qunit';

moduleForModel('expansion-profile-include', 'Unit | Serializer | ExpansionProfile_Include', {
  needs: [
    'serializer:expansion-profile-include',
    'model:expansion-profile-designation-1',
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