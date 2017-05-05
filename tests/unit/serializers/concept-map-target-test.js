import { moduleForModel, test } from 'ember-qunit';

moduleForModel('concept-map-target', 'Unit | Serializer | ConceptMap_Target', {
  needs: [
    'serializer:concept-map-target',
    'model:concept-map-depends-on',
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