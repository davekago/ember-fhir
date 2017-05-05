import { moduleForModel, test } from 'ember-qunit';

moduleForModel('activity-definition', 'Unit | Serializer | ActivityDefinition', {
  needs: [
    'serializer:activity-definition',
    'model:identifier',
    'model:period',
    'model:usage-context',
    'model:codeable-concept',
    'model:contributor',
    'model:contact-detail',
    'model:related-artifact',
    'model:reference',
    'model:timing',
    'model:range',
    'model:activity-definition-participant',
    'model:quantity',
    'model:dosage',
    'model:activity-definition-dynamic-value',
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