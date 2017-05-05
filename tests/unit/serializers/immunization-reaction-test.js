import { moduleForModel, test } from 'ember-qunit';

moduleForModel('immunization-reaction', 'Unit | Serializer | Immunization_Reaction', {
  needs: [
    'serializer:immunization-reaction',
    'model:reference',
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