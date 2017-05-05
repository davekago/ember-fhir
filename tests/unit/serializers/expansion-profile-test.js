import { moduleForModel, test } from 'ember-qunit';

moduleForModel('expansion-profile', 'Unit | Serializer | ExpansionProfile', {
  needs: [
    'serializer:expansion-profile',
    'model:identifier',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:expansion-profile-fixed-version',
    'model:expansion-profile-excluded-system',
    'model:expansion-profile-designation',
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