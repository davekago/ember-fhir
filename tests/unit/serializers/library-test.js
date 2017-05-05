import { moduleForModel, test } from 'ember-qunit';

moduleForModel('library', 'Unit | Serializer | Library', {
  needs: [
    'serializer:library',
    'model:identifier',
    'model:codeable-concept',
    'model:period',
    'model:usage-context',
    'model:contributor',
    'model:contact-detail',
    'model:related-artifact',
    'model:parameter-definition',
    'model:data-requirement',
    'model:attachment',
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