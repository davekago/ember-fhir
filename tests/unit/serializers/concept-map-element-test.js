import { moduleForModel, test } from 'ember-qunit';

moduleForModel('concept-map-element', 'Unit | Serializer | ConceptMap_Element', {
  needs: [
    'serializer:concept-map-element',
    'model:concept-map-target',
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