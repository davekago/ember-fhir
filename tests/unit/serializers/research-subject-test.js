import { moduleForModel, test } from 'ember-qunit';

moduleForModel('research-subject', 'Unit | Serializer | ResearchSubject', {
  needs: [
    'serializer:research-subject',
    'model:identifier',
    'model:period',
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