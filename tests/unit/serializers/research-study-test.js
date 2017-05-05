import { moduleForModel, test } from 'ember-qunit';

moduleForModel('research-study', 'Unit | Serializer | ResearchStudy', {
  needs: [
    'serializer:research-study',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:contact-detail',
    'model:related-artifact',
    'model:period',
    'model:annotation',
    'model:research-study-arm',
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