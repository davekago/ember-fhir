import { moduleForModel, test } from 'ember-qunit';

moduleForModel('allergy-intolerance-reaction', 'Unit | Serializer | AllergyIntolerance_Reaction', {
  needs: [
    'serializer:allergy-intolerance-reaction',
    'model:codeable-concept',
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