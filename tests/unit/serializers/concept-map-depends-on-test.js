import { moduleForModel, test } from 'ember-qunit';

moduleForModel('concept-map-depends-on', 'Unit | Serializer | ConceptMap_DependsOn', {
  needs: [
    'serializer:concept-map-depends-on',
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