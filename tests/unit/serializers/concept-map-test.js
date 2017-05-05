import { moduleForModel, test } from 'ember-qunit';

moduleForModel('concept-map', 'Unit | Serializer | ConceptMap', {
  needs: [
    'serializer:concept-map',
    'model:identifier',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:reference',
    'model:concept-map-group',
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