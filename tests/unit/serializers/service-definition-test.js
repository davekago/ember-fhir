import { moduleForModel, test } from 'ember-qunit';

moduleForModel('service-definition', 'Unit | Serializer | ServiceDefinition', {
  needs: [
    'serializer:service-definition',
    'model:identifier',
    'model:period',
    'model:usage-context',
    'model:codeable-concept',
    'model:contributor',
    'model:contact-detail',
    'model:related-artifact',
    'model:trigger-definition',
    'model:data-requirement',
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