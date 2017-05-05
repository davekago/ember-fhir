import { moduleForModel, test } from 'ember-qunit';

moduleForModel('endpoint', 'Unit | Serializer | Endpoint', {
  needs: [
    'serializer:endpoint',
    'model:identifier',
    'model:coding',
    'model:reference',
    'model:contact-point',
    'model:period',
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