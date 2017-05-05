import { moduleForModel, test } from 'ember-qunit';

moduleForModel('concept-map-group', 'Unit | Serializer | ConceptMap_Group', {
  needs: [
    'serializer:concept-map-group',
    'model:concept-map-element',
    'model:concept-map-unmapped',
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