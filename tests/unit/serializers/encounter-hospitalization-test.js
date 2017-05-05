import { moduleForModel, test } from 'ember-qunit';

moduleForModel('encounter-hospitalization', 'Unit | Serializer | Encounter_Hospitalization', {
  needs: [
    'serializer:encounter-hospitalization',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
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