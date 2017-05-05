import { moduleForModel, test } from 'ember-qunit';

moduleForModel('allergy-intolerance', 'Unit | Serializer | AllergyIntolerance', {
  needs: [
    'serializer:allergy-intolerance',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:age',
    'model:period',
    'model:range',
    'model:annotation',
    'model:allergy-intolerance-reaction',
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