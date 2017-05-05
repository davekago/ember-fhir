import { moduleForModel, test } from 'ember-qunit';

moduleForModel('measure', 'Unit | Serializer | Measure', {
  needs: [
    'serializer:measure',
    'model:identifier',
    'model:period',
    'model:usage-context',
    'model:codeable-concept',
    'model:contributor',
    'model:contact-detail',
    'model:related-artifact',
    'model:reference',
    'model:measure-group',
    'model:measure-supplemental-data',
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:measure-supplemental-datum'
  ]
});

test('it serializes records', function(assert) {
  const record = this.subject(),
    serializeRecord = record.serialize();

  assert.ok(serializeRecord);
});