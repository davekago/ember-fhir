import { moduleForModel, test } from 'ember-qunit';

moduleForModel('related-person', 'Unit | Serializer | RelatedPerson', {
  needs: [
    'serializer:related-person',
    'model:identifier',
    'model:reference',
    'model:codeable-concept',
    'model:human-name',
    'model:contact-point',
    'model:address',
    'model:attachment',
    'model:period',
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